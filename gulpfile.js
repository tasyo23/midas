const { dest, src, parallel, series, watch } = require("gulp");
const fs = require("fs");
const babel = require("gulp-babel");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify-es").default;
const gulpClean = require("gulp-clean");
const server = require("gulp-server-livereload");
const sass = require("gulp-sass")(require("sass"));
const webp = require("gulp-webp");
const fileInclude = require("gulp-file-include");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");

function clean(done) {
  if (fs.existsSync("./docs/")) {
    return src("./docs/", { read: false }).pipe(gulpClean());
  }
  done();
}

function js() {
  return src("src/js/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(dest("docs/js"));
}

function html() {
  return src("./src/*.html")
    .pipe(
      plumber({
        errorHandler: notify.onError({
          title: "HTML",
          message: "Error <%= error.message %>",
          sound: false
        })
      })
    )
    .pipe(
      fileInclude({
        prefix: "@@",
        basepath: "@file"
      })
    )
    .pipe(dest("./docs/"));
}

function buildStyles() {
  return src("./src/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(dest("./docs/css"));
}

function fonts() {
  return src("./src/fonts/*.*").pipe(dest("./docs/fonts"));
}

function watching() {
  watch("src/**/*.html", html);
  watch("src/js/*.js", js);
  watch("src/img/*", img);
  watch("src/scss/**/*.scss", buildStyles);
}

function serverLoad() {
  return src("docs").pipe(
    server({
      livereload: true,
      open: true
    })
  );
}

function img() {
  return src(["./src/img/*.*", "!./src/*.svg"])
    .pipe(webp())
    .pipe(src("src/img/*.*"))
    .pipe(dest("./docs/img"));
}

exports.html = html;
exports.js = js;
exports.buildStyles = buildStyles;
exports.server = serverLoad;
exports.img = img;
exports.fonts = fonts;

exports.default = series(
  clean,
  parallel(html, js, buildStyles, img, fonts),
  parallel(serverLoad, watching)
);
