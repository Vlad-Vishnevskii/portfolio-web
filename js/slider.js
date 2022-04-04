'use strict';
(function () {

const sliderWrapper = document.querySelector('.certificates__wrapper');
const sliderList = document.querySelectorAll('.certificates__item');
let currentIndex = 0;
const startIndex = 0;
const sliderControlButtons = document.querySelectorAll('.certificates__item-btn');
const sliderControlButtonsList = document.querySelector('.certificates__slider-buttons');

const stopOnMaxSlide = function () {
  if (currentIndex > sliderList.length - 1 ) {
    currentIndex = 0;
  }
}

const stopOnMinSlide = function () {
  if (currentIndex < startIndex) {
    currentIndex = sliderList.length - 1;
  }
}

const moveToRight = function () {
  currentIndex +=1;
  stopOnMaxSlide();
}

const moveToLeft = function () {
  currentIndex -=1;
  stopOnMinSlide();
}

const hideSlide = function () {
  sliderList[currentIndex].classList.remove('certificates__item_current');
  sliderControlButtons[currentIndex].classList.remove('certificates__item-btn_active');
}

const showSlide = function () {
  sliderList[currentIndex].classList.add('certificates__item_current');
  sliderControlButtons[currentIndex].classList.add('certificates__item-btn_active');
}

const onSliderButtonClick = function (evt) {
  const target = evt.target;
  hideSlide();
  console.log(currentIndex)
  if (target.closest('.certificates__arrow-btn_right')) {
    moveToRight();
  }
  if (target.closest('.certificates__arrow-btn_left')) {
    moveToLeft();
  }
  console.log(currentIndex)
  showSlide();
}

const onSliderControlClick = function (evt) {
  const target = evt.target;
  stopOnMinSlide();
  stopOnMaxSlide();
  hideSlide();
  currentIndex = Number(target.dataset.number);
  showSlide();
}

sliderWrapper.addEventListener('click', onSliderButtonClick);
sliderControlButtonsList.addEventListener('click', onSliderControlClick);

})();
