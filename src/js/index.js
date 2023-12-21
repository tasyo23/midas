function addMenuArrow() {
  const menuItems = $(".menu__wrap>li");
  menuItems.map((key, item) => {
    if ($(item).children("ul").length > 0) {
      $(item).append(
        '<span><svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M1.19884 4.6013e-07L5.71295 4.51411L4.51411 5.71295L0 1.19884L1.19884 4.6013e-07Z" fill="white"/>\n' +
          '<path d="M9.03 1.19884L4.51589 5.71295L3.31705 4.51411L7.83116 0L9.03 1.19884Z" fill="white"/>\n' +
          "</svg>\n</span>"
      );
    }
  });
}

function showMobileMenu() {
  $(".header__mobile-menu-btn").click(() => {
    $(".mobile-menu").toggleClass("mobile-menu_show");
    console.log($(".burger"));
    $(".burger").toggleClass("burger_show");
  });
}

showMobileMenu();

addMenuArrow();
$(".slider").slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 3,
  variableWidth: true,
  prevArrow: `<button type="button" class="slider__arrow slider__arrow_next" aria-label="Следующие продукты"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></button>`,
  nextArrow: `<button type="button" class="slider__arrow slider__arrow_prev" aria-label="Предыдущие продукты"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg></button>`

  // // the magic
  // responsive: [{
  //
  //     breakpoint: 1024,
  //     settings: {
  //         slidesToShow: 3,
  //         infinite: true
  //     }
  //
  // }, {
  //
  //     breakpoint: 600,
  //     settings: {
  //         slidesToShow: 2,
  //         dots: true
  //     }
  //
  // }, {
  //
  //     breakpoint: 300,
  //     settings: "unslick" // destroys slick
  //
  // }
  // ]
});
