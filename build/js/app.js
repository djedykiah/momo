'use strict';

$(function () {
  $(window).on('scroll', function () {
    if ($(window).scrollTop()) {
      $('.header').addClass('sticky');
    } else {
      $('.header').removeClass('sticky');
    }
  });
  $('.menu-toggle').on('click', function () {
    $('.right').toggleClass('active');
  });
});