

function  addMenuArrow(){
    const menuItems=$('.menu__wrap>li')
    menuItems.map((key, item)=>{
       if($(item).children('ul').length>0){
           $(item).append('<span><svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
               '<path d="M1.19884 4.6013e-07L5.71295 4.51411L4.51411 5.71295L0 1.19884L1.19884 4.6013e-07Z" fill="white"/>\n' +
               '<path d="M9.03 1.19884L4.51589 5.71295L3.31705 4.51411L7.83116 0L9.03 1.19884Z" fill="white"/>\n' +
               '</svg>\n</span>')
       }

    })
}

addMenuArrow();
