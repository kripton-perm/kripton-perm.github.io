var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var scheduleSignup = document.querySelector('.schedule__signup');
var scheduleModal = document.querySelector('.schedule__modal');
var scheduleClose = scheduleModal.querySelector('.signup__close');
//var servicesToggles = document.querySelectorAll('.services .slider__toggle');
//var servicesItems = document.querySelectorAll('.services .services__item');
//var servicesList = document.querySelector('.services__list');
//var pageHeader = document.querySelector('.page-header');

navMain.classList.remove('main-nav--nojs');
navMain.classList.remove('main-nav--open');
navMain.classList.add('main-nav--close');
//pageHeader.classList.add('page-header--closed');
//pageHeader.classList.remove('page-header--opened');
navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--close')) {
    navMain.classList.remove('main-nav--close');
    navMain.classList.add('main-nav--open');
    //pageHeader.classList.remove('page-header--closed');
    //pageHeader.classList.add('page-header--opened');
  } else {
    navMain.classList.add('main-nav--close');
    navMain.classList.remove('main-nav--open');
    //pageHeader.classList.add('page-header--closed');
  }
});
scheduleSignup.addEventListener('click', function() {
  scheduleModal.classList.add('modal--show');
});
scheduleClose.addEventListener('click', function() {
  scheduleModal.classList.remove('modal--show');
});
/*
servicesList.classList.remove('services__list--nojs');
servicesList.classList.add('slider');
for (var i = 0; i < servicesItems.length; i++) {
  servicesItems[i].classList.add('slider__item');
}
servicesItems[0].classList.add('slider__item--active');
servicesToggles[0].classList.add('slider__toggle--active');

servicesToggles[0].addEventListener('click', function() {
  for (var k = 0; k < servicesItems.length; k++) {
    if (servicesItems[k].classList.contains('slider__item--active')) {
      servicesItems[k].classList.remove('slider__item--active');
      servicesToggles[k].classList.remove('slider__toggle--active');
    }
  }
  servicesItems[0].classList.add('slider__item--active');
  servicesToggles[0].classList.add('slider__toggle--active');
});
servicesToggles[1].addEventListener('click', function() {
  for (var k = 0; k < servicesItems.length; k++) {
    if (servicesItems[k].classList.contains('slider__item--active')) {
      servicesItems[k].classList.remove('slider__item--active');
      servicesToggles[k].classList.remove('slider__toggle--active');
    }
  }
  servicesItems[1].classList.add('slider__item--active');
  servicesToggles[1].classList.add('slider__toggle--active');
});
servicesToggles[2].addEventListener('click', function() {
  for (var k = 0; k < servicesItems.length; k++) {
    if (servicesItems[k].classList.contains('slider__item--active')) {
      servicesItems[k].classList.remove('slider__item--active');
      servicesToggles[k].classList.remove('slider__toggle--active');
    }
  }
  servicesItems[2].classList.add('slider__item--active');
  servicesToggles[2].classList.add('slider__toggle--active');
});*/