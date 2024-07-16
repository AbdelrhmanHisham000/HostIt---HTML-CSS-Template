'use strict';
const btnContactUs = document.querySelector('.btn--contact');
const Info = document.querySelector('#info');
//scroll
btnContactUs.addEventListener('click', function () {
  Info.scrollIntoView({ behavior: 'smooth' });
});

const handlover = function (e) {
  if (e.target.classList.contains('nav_link')) {
    const link = e.target;
    const siblings = link.closest('.nav_links').querySelectorAll('.nav_link');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

const navs = document.querySelector('.nav_links');
navs.addEventListener('mouseover', handlover.bind(0.5));
navs.addEventListener('mouseout', handlover.bind(1));
