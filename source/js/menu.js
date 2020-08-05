'use strict';
var pageNav = document.querySelector('.page-nav__top');
var headerToggle = document.querySelector('.page-nav-top__toggle');
pageNav.classList.remove('page-nav-top--nojs');

var toogleMenu = function () {
  if (pageNav.classList.contains('page-nav-top--closed')) {
    pageNav.classList.remove('page-nav-top--closed');
    pageNav.classList.add('page-nav-top--opened');
  } else {
    pageNav.classList.add('page-nav-top--closed');
    pageNav.classList.remove('page-nav-top--opened');
  }
};

var headerToggleClickHandler = function () {
  toogleMenu();
};

headerToggle.addEventListener('click', headerToggleClickHandler);
