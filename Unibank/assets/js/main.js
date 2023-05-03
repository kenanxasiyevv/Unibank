

function toggleDarkMode() {
  document.body.classList.toggle('body_dark_mode')
  const darkarr = document.querySelectorAll('.dark-mode')
  const lightarr = document.querySelectorAll('.light-mode')


  for (const mode of darkarr) {
    mode.classList.toggle('dark-mode')
    mode.classList.toggle('light-mode')
  }
  for (const mode of lightarr) {
    mode.classList.toggle('dark-mode')
    mode.classList.toggle('light-mode')
  }


  const typeslight = document.querySelectorAll('.type-light')
  const typesdark = document.querySelectorAll('.type-dark')


  for (const type of typeslight) {
    type.classList.toggle('type-dark')
    type.classList.toggle('type-light')
  }

  for (const type of typesdark) {
    type.classList.toggle('type-light')
    type.classList.toggle('type-dark')
  }

  const topNavbar = document.querySelector('.top')
  topNavbar.classList.toggle('top-navbar-mode')

  let icon = document.getElementById('icon')

  icon.classList.toggle('fa-cloud-moon')
  icon.classList.toggle('fa-sun')
}

const ctype1 = document.querySelector('#ctype1')
const ctype2 = document.querySelector('#ctype2')


ctype2.onclick = function (e) {
  e.preventDefault()

  if (ctype1.classList.contains('active_type')) {
    ctype1.classList.toggle('active_type')
    ctype2.classList.toggle('active_type')
  }
}

ctype1.onclick = function (e) {
  e.preventDefault();

  if (ctype2.classList.contains('active_type')) {
    ctype1.classList.toggle('active_type')
    ctype2.classList.toggle('active_type')
  }
}

const ctypeh1 = document.querySelector('#ctypeh1')
const ctypeh2 = document.querySelector('#ctypeh2')

ctypeh2.onclick = function (e) {
  e.preventDefault()

  if (ctypeh1.classList.contains('active_type')) {
    ctypeh1.classList.toggle('active_type')
    ctypeh2.classList.toggle('active_type')
  }
}

ctypeh1.onclick = function (e) {
  e.preventDefault();

  if (ctypeh2.classList.contains('active_type')) {
    ctypeh1.classList.toggle('active_type')
    ctypeh2.classList.toggle('active_type')
  }
}

let hamburger_menu_bar = document.querySelector('.fa-bars-staggered')

hamburger_menu_bar.onclick = function () {
  document.querySelector('.hamburger_menu').classList.toggle('d-none')
  document.body.classList.toggle('overflow-hidden')
}

let slider = document.querySelector('.slider')
document.querySelectorAll('.radios ul li').forEach(function (indicator, index) {
  indicator.addEventListener('click', function () {
    document.querySelector('.radios .selected').classList.remove('selected')
    indicator.classList.add('selected')
    slider.style.transform = `translate(${index * -25}%)`
  })

  let x = 0;

  setInterval(() => {

    if (x <= (-75)) {
      x = 0;

      document.querySelector('.radios .selected').classList.remove('selected')
      document.getElementById('radio1').classList.add('selected')

      slider.style.transform = `translate(${x})`
    }

    else if (x >= (-75)) {

      slider.style.transform = `translate(${x - 25}%)`
      x -= 25;

      if (x === -25) {
        document.querySelector('.radios .selected').classList.remove('selected')
        document.getElementById('radio2').classList.add('selected')
      }

      else if (x === -50) {
        document.querySelector('.radios .selected').classList.remove('selected')
        document.getElementById('radio3').classList.add('selected')
      }

      else if (x === -75) {
        document.querySelector('.radios .selected').classList.remove('selected')
        document.getElementById('radio4').classList.add('selected')
      }
    }
  }, 4000);
})

function Chat() {
  document.querySelector('.chat-page').classList.toggle('d-none')
}

document.querySelector('#minus').onclick = function () {
  document.querySelector('.chat-page').classList.toggle('d-none')
}

let searchloop = document.querySelector('.searchmenu i')
let searchdiv = document.querySelector('.searchdiv')

searchloop.onclick = function () {
  searchdiv.classList.toggle('d-none')
}

let close = document.querySelector('.close')

close.onclick = () => searchloop.onclick()

let loop = document.querySelector('.loop')
let searchextension = document.querySelector('.searchextension')

loop.onclick = () => searchextension.classList.toggle('d-none')

const langBtns = document.querySelectorAll('.btnlang');

for (const btn of langBtns) {
  btn.addEventListener('click', (e) => {
    e.preventDefault()

    btn.classList.add('d-none');
    const otherBtns = Array.from(langBtns).filter(b => b !== btn);
    otherBtns.forEach(b => b.classList.remove('d-none'));
  });
}

const exchangeButtons = document.querySelectorAll('.choose_type a');

exchangeButtons.forEach((button, index) => {
  button.onclick = (e) => {
    e.preventDefault();
    const activeButton = document.querySelector('.active_type_button');
    if (button !== activeButton) {
      button.classList.add('active_type_button');
      activeButton.classList.remove('active_type_button');
    }

    if (index === 0) {
      document.querySelector('.rate1').style.display = 'block';
      document.querySelector('.rate2').style.display = 'none';
      document.querySelector('.rate3').style.display = 'none';
    } else if (index === 1) {
      document.querySelector('.rate1').style.display = 'none';
      document.querySelector('.rate2').style.display = 'block';
      document.querySelector('.rate3').style.display = 'none';
    } else if (index === 2) {
      document.querySelector('.rate1').style.display = 'none';
      document.querySelector('.rate2').style.display = 'none';
      document.querySelector('.rate3').style.display = 'block';
    }
  };
});



