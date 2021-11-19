"use strict";

$('.main__screen-slider').slick({
  dots: false,
  dotsClass: 'main__pagination',
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  asNavFor: '.second__slider, .third__slider'
});
document.addEventListener('DOMContentLoaded', function () {
  // Структура страницы загружена и готова к взаимодействию
  var button = document.querySelector('.header__input'); // находим кнопку для открытия/закрытия окна навигации

  var nav = document.querySelector('.ppp');
  button.addEventListener('click', function () {
    // при клике на кнопку
    nav.classList.add('toHide');
    button.classList.add('header__input-active'); // открываем/закрываем окно навигации, добаляя/удаляя активный класс
  });
  window.addEventListener('click', function (e) {
    // при клике в любом месте окна браузера
    var target = e.target; // находим элемент, на котором был клик

    if (!target.closest('.nav') && !target.closest('.header__input')) {
      // если этот элемент или его родительские элементы не окно навигации и не кнопка
      nav.classList.remove('toHide');
      button.classList.remove('header__input-active'); // то закрываем окно навигации, удаляя активный класс
    }
  });
});
$('.second__slider').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  asNavFor: '.main__screen-slider, .third__slider'
});
$('.third__slider').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  focusOnSelect: true,
  slidesToShow: 3,
  arrows: false,
  asNavFor: '.main__screen-slider, .second__slider'
});
$('.advantages__slider').slick({
  focusOnSelect: true,
  variableWidth: true,
  dots: true,
  dotsClass: 'advantages__pagination',
  arrows: true,
  prevArrow: '<button id="prev" type="button" class="advantages__arrow advantages__arrow--left"> <img src="img/arrow__left-black.svg"alt="" class="black-left">   <img src="img/prev__arrow.svg"  class="arrow__white-right" alt="">   </button>',
  nextArrow: '<button type="button" class="advantages__arrow advantages__arrow--right" > <img src="img/arrow__right-black.svg" class="arrow__white-left" alt="">   <img src="img/next__arrow.svg" class="arrow__black-left"class="arrow__white-left"  alt=""> </button>',
  slidesToShow: 3,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 3000
});
$('.aaa').slick({
  infinite: true,
  slidesToShow: 1,
  variableWidth: true,
  asNavFor: '.inactive__second-slider',
  prevArrow: '<button id="prev" type="button" class="news__arrow advantages__arrow--left"> <img src="img/arrow__left-black.svg"alt="" class="black-left">   <img src="img/prev__arrow.svg"  class="arrow__white-right" alt="">   </button>',
  nextArrow: '<button type="button" class="news__arrow advantages__arrow--right" > <img src="img/arrow__right-black.svg" class="arrow__white-left" alt="">   <img src="img/next__arrow.svg" class="arrow__black-left"class="arrow__white-left"  alt=""> </button>'
});
$('.inactive__second-slider').slick({
  asNavFor: '.aaa',
  slidesToShow: 1,
  infinite: true,
  arrows: false
});
$('.project__slider').slick({
  slidesToShow: 3,
  prevArrow: '<button id="prev" type="button" class="projects__arrow projects__arrow--left">  <img src="img/arrow__left-black.svg"alt="" class="black-left">   <img src="img/prev__arrow.svg"  class="arrow__white-right" alt=""> </button>',
  nextArrow: '<button type="button" class="projects__arrow projects__arrow--right"><img src="img/arrow__right-black.svg" class="arrow__white-left" alt="">   <img src="img/next__arrow.svg" class="arrow__black-left"class="arrow__white-left"  alt=""></button>',
  asNavFor: '.progressbar__slider, .project__slider-progressbar'
});
$('.progressbar__slider').slick({
  slidesToShow: 5,
  slidesToScroll: 4,
  asNavFor: '.project__slider, .project__slider-progressbar'
});
$('.project__slider-progressbar').slick({
  fade: true,
  arrows: false,
  asNavFor: '.progressbar__slider, .project__slider'
});
var projectTab = document.querySelectorAll('.project__tab');
var projectTabsItems = document.querySelectorAll('.project__tab-content');
projectTab.forEach(function (e) {
  e.addEventListener('click', function () {
    var currentBtn = e;
    var tabId = currentBtn.getAttribute('data-tabs');
    var currentTab = document.querySelector(tabId);
    projectTab.forEach(function (item) {
      item.classList.remove('active');
    });
    projectTabsItems.forEach(function (item) {
      item.classList.remove('active');
    });
    currentBtn.classList.add('active');
    currentTab.classList.add('active');
  });
});
var newsTab = document.querySelectorAll('.news__slide-tabs-item');
var newsTabsItems = document.querySelectorAll('.aaa');
newsTab.forEach(function (e) {
  e.addEventListener('click', function () {
    var currentBtn = e;
    var tabId = currentBtn.getAttribute('data-news');
    var currentTab = document.querySelector(tabId);
    newsTab.forEach(function (item) {
      item.classList.remove('active');
    });
    newsTabsItems.forEach(function (item) {
      item.classList.remove('active');
    });
    currentBtn.classList.add('active');
    currentTab.classList.add('active');
  });
});
var growsBtn = document.querySelectorAll('.btn-grow');
var growsText = document.querySelector('.add');
var growBtn1 = document.querySelector('.btn-grow1');
var growBtn2 = document.querySelector('.btn-grow2');
growsBtn.forEach(function (e) {
  e.addEventListener('click', function () {
    growsText.classList.add('active');
    growBtn1.classList.remove('active');
    growBtn2.classList.add('active');
  });
  growBtn2.addEventListener('click', function () {
    growsText.classList.remove('active');
    growBtn1.classList.add('active');
    growBtn2.classList.remove('active');
  });
});
var growsTab = document.querySelectorAll('.grow-points__tabs-item');
var growsTabsItems = document.querySelectorAll('.grow-points__content');
growsTab.forEach(function (e) {
  e.addEventListener('click', function () {
    var currentBtn = e;
    var tabId = currentBtn.getAttribute('data-tab');
    var currentTab = document.querySelector(tabId);
    growsTab.forEach(function (item) {
      item.classList.remove('active');
    });
    growsTabsItems.forEach(function (item) {
      item.classList.remove('active');
    });
    currentBtn.classList.add('active');
    currentTab.classList.add('active');
  });
});
var bubbleItem = document.querySelectorAll('.bubbles__item');
$('.grow-points__item').slick({
  arrows: true,
  variableWidth: true,
  prevArrow: '<button id="prev" type="button" class="grow__points__arrow projects__arrow projects__arrow--left">  <img src="img/arrow__left-black.svg"alt="" class="black-left">   <img src="img/prev__arrow.svg"  class="arrow__white-right" alt=""> </button>',
  nextArrow: '<button type="button" class="grow__points__arrow projects__arrow projects__arrow--right"><img src="img/arrow__right-black.svg" class="arrow__white-left" alt="">   <img src="img/next__arrow.svg" class="arrow__black-left"class="arrow__white-left"  alt=""></button>'
});
var DCardBtn = document.querySelectorAll('.open__grow-points');
var DTabsItems = document.querySelectorAll('.grow-points__participation-block-item');
DCardBtn.forEach(function (e) {
  e.addEventListener('click', function () {
    var currentBtn = e;
    var tabId = currentBtn.getAttribute('data-d');
    var currentTab = document.querySelector(tabId);
    DCardBtn.forEach(function (item) {
      item.classList.remove('active');
    });
    DTabsItems.forEach(function (item) {
      item.classList.remove('active');
    });
    currentBtn.classList.add('active');
    currentTab.classList.add('active');
  });
});
var bubleBtn = document.querySelectorAll('.bubbles__item');
bubleBtn.forEach(function (e) {
  e.addEventListener('click', function () {
    bubbleItem.forEach(function (item) {
      item.addEventListener('click', function () {
        $(function () {
          $('.bubbles__item').on('click', function (e) {
            $('html,body').stop().animate({
              scrollTop: $('#grow-point').offset().top
            }, 1000);
            e.preventDefault();
          });
        });
      });
    });
    var currentBtn = e;
    var tabId = currentBtn.getAttribute('data-tab');
    var currentTab = document.querySelector(tabId);
    growsTab.forEach(function (item) {
      item.classList.remove('active');
    });
    growsTabsItems.forEach(function (item) {
      item.classList.remove('active');
    });
    currentTab.classList.add('active');
  });
});
bubleBtn.forEach(function (e) {
  e.addEventListener('click', function () {
    bubbleItem.forEach(function (item) {
      item.addEventListener('click', function () {
        $(function () {
          $('.bubbles__item').on('click', function (e) {
            $('html,body').stop().animate({
              scrollTop: $('#grow-point').offset().top
            }, 1000);
            e.preventDefault();
          });
        });
      });
    });
    var currentBtn = e;
    var tabId = currentBtn.getAttribute('data-btn');
    var currentTab = document.querySelector(tabId);
    growsTab.forEach(function (item) {
      item.classList.remove('active');
    });
    DCardBtn.forEach(function (item) {
      item.classList.remove('active');
    });
    currentTab.classList.add('active');
  });
});
var bigBuble = document.querySelector('.bubbles__item-big');
bigBuble.addEventListener('click', function () {
  $(function () {
    $('.bubbles__item-big').on('click', function (e) {
      $('html,body').stop().animate({
        scrollTop: $('#invest__point').offset().top
      }, 1000);
      e.preventDefault();
    });
  });
});
"use strict";
"use strict";

$('.grow-points__item').slick({
  arrows: true,
  prevArrow: '<button id="prev" type="button" class="grow__points__arrow projects__arrow projects__arrow--left">  <img src="img/arrow__left-black.svg"alt="" class="black-left">   <img src="img/prev__arrow.svg"  class="arrow__white-right" alt=""> </button>',
  nextArrow: '<button type="button" class="grow__points__arrow projects__arrow projects__arrow--right"><img src="img/arrow__right-black.svg" class="arrow__white-left" alt="">   <img src="img/next__arrow.svg" class="arrow__black-left"class="arrow__white-left"  alt=""></button>'
});
//# sourceMappingURL=main.js.map
