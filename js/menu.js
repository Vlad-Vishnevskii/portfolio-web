'use strict';
(function () {

  var mainNav = document.querySelector('.main-nav');
  var closeButton = document.querySelector('.main-nav__close-btn');
  var burgerButton = document.querySelector('.header__burger-button');
  var body = document.querySelector('body');
  var navList = document.querySelector('.main-nav__list');

  var onMenuLinkPress = function (evt) {
    if (evt.target.closest('.main-nav__link')) {
      closeMenu();
    }
  };

  var closeMenu = function () {
    mainNav.classList.remove('main-nav_open');
    closeButton.removeEventListener('click', closeMenu);
    body.classList.remove('disable-scrolling-js');
    navList.removeEventListener('click', onMenuLinkPress);
  };

  var openMenu = function () {
    if (!mainNav.classList.contains('main-nav_open')) {
      mainNav.classList.add('main-nav_open');
      closeButton.addEventListener('click', closeMenu);
      body.classList.add('disable-scrolling-js');
      navList.addEventListener('click', onMenuLinkPress);
    }
  };

  if (mainNav && closeButton && burgerButton) {
    mainNav.classList.remove('main-nav_no-js');
    closeButton.classList.remove('main-nav__close-btn_no-js');
    burgerButton.classList.remove('mobile-top__button_no-js');
    burgerButton.addEventListener('click', openMenu);
  }

})();
