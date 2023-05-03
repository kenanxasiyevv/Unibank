document.addEventListener('DOMContentLoaded', function () {

  const langLinks = document.querySelectorAll('.langside a');

  langLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {

      event.preventDefault();

      link.classList.add('active_button');
      link.parentElement.querySelectorAll('a:not(:first-child)').forEach(function (sibling) {
        sibling.classList.remove('active_button');
      });

      if (link.textContent.includes('RU')) {
        link.classList.add('active_button');
      }

    });
  });

  const firstDot = document.querySelector('#firstdot');
  const secondDot = document.querySelector('#seconddot');
  const firstSlide = document.querySelector('#firstslide');
  const secondSlide = document.querySelector('#secondslide');

  firstDot.addEventListener('click', function () {
    firstDot.classList.add('active_dot');
    secondDot.classList.remove('active_dot');
    firstSlide.classList.remove('d-none');
    secondSlide.classList.add('d-none');
  });

  secondDot.addEventListener('click', function () {
    secondDot.classList.add('active_dot');
    firstDot.classList.remove('active_dot');
    secondSlide.classList.remove('d-none');
    firstSlide.classList.add('d-none');
  });

  const firstBtn = document.querySelector('#firstbtn');
  const secondBtn = document.querySelector('#secondbtn');
  const firstSpan = document.querySelector('#firstspan');
  const secondSpan = document.querySelector('#secondspan');

  firstBtn.addEventListener('click', function () {
    firstBtn.classList.add('active_buton_360');
    secondBtn.classList.remove('active_buton_360');
    firstSpan.classList.add('active_orange_buton');
    secondSpan.classList.remove('active_orange_buton');
  });

  secondBtn.addEventListener('click', function () {
    secondBtn.classList.add('active_buton_360');
    firstBtn.classList.remove('active_buton_360');
    secondSpan.classList.add('active_orange_buton');
    firstSpan.classList.remove('active_orange_buton');
  });

});
