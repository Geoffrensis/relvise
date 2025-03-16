// let isMobile = {
//    Android: function () {
//       return navigator.userAgent.match(/Android/i);
//    },
//    BlackBerry: function () {
//       return navigator.userAgent.match(/BlackBerry/i);
//    },
//    iOS: function () {
//       return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//    },
//    Opera: function () {
//       return navigator.userAgent.match(/Opera Mini/i);
//    },
//    Windows: function () {
//       return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
//    },
//    any: function () {
//       return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
//    }
// };

// let burger = document.querySelector('.header__burger');
// let menu = document.querySelector('.header__menu');
// let body = document.querySelector('body');

// burger.addEventListener('click', function () {
//    burger.classList.toggle('active');
//    menu.classList.toggle('active');
//    body.classList.toggle('lock');
// })

// if (isMobile.any()) {
//    body.classList.add('touch');
//    let arrow = document.querySelectorAll('.arrow');
//    for (let i = 0; i < arrow.length; i++) {
//       let thisLink = arrow[i].previousElementSibling
//       let subMenu = arrow[i].nextElementSibling;
//       let thisArrow = arrow[i];

//       thisLink.classList.add('parent');
//       arrow[i].addEventListener('click', function () {
//          subMenu.classList.toggle('open');
//          thisArrow.classList.toggle('act');
//       })
//    }
// } else {
//    body.classList.add('mouse');
// }

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');
let body = document.querySelector('body');

burger.addEventListener('click', function () {
   menu.classList.toggle('active');
   burger.classList.toggle('active');
   body.classList.toggle('lock');
});


function ibg() {

   let ibg = document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
         ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}

ibg();



// Select all tabs and contents

const tabs = document.querySelectorAll('.tab__btn');
const all_content = document.querySelectorAll('.tab__content');

tabs.forEach((tab, index) => {
   tab.addEventListener('click', (e) => {
      tabs.forEach(tab => { tab.classList.remove('active'); });
      tab.classList.add('active');

      all_content.forEach(content => { content.classList.remove('active'); });
      all_content[index].classList.add('active');
   });
});
