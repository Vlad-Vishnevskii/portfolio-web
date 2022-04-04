'use strict';
(function () {

const topButton = document.querySelector('.page-footer__top-btn');
const pixelsBeforeShow = 200;

const showTopButton = function () {
  if (scrollY < pixelsBeforeShow) {
    topButton.style.display = "none"
  } else {
    topButton.style.display = "flex"
  };
}

window.addEventListener('scroll', showTopButton);

})();
