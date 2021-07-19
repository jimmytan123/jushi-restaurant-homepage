'use strict';

const hamburgerIcon = document.querySelector('#hamburger-icon');
const navList = document.querySelector('.navigation');
const backToTopbtn = document.querySelector('#back-to-top');

hamburgerIcon.addEventListener('click', () => {
  if (navList.classList.contains('active')) {
    navList.classList.remove('active');
    hamburgerIcon.classList.remove('fa-times', 'menu-show');
    hamburgerIcon.classList.add('fas', 'fa-bars');
  } else {
    navList.classList.add('active');
    hamburgerIcon.classList.remove('fa-bars');
    hamburgerIcon.classList.add('fas', 'fa-times', 'menu-show');
  }
});

window.onscroll = function () {
  if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
    backToTopbtn.classList.add('show');
  } else {
    backToTopbtn.classList.remove('show');
  }
};
