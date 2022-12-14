// Mobile menu

const menuMobile = document.querySelector('.nav');
const burger = document.querySelector('.burger');

function toggleMenu() {
  menuMobile.classList.toggle('nav_active');
    burger.classList.toggle('burger_active');
}

burger.addEventListener('click', toggleMenu);
menuMobile.addEventListener('click', toggleMenu);

// Change bg-color menu in scroll

const menu = document.querySelector('.nav');

function scrollMenu() {
    if (window.pageYOffset > 50) {
      menu.style.backgroundColor = '#000000';
      menu.style.top = '0';
      menu.style.paddingTop = '30px';
    }
    else {
      menu.style.backgroundColor = 'transparent';
      menu.style.top = '130px';
      menu.style.paddingTop = '0';
    }
}

window.addEventListener('scroll', scrollMenu);

// Slider script

$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<div class="slider__arrow slider__arrow_prev"></div>',
        nextArrow: '<div class="slider__arrow slider__arrow_next"></div>',
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            }
          ]
    });
});

// Timer script

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  return {
    'total': t,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
 
function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
 
  function updateClock() {
    var t = getTimeRemaining(endtime);
 
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
 
    if (t.total <= 0) {
      clearInterval(timeinterval);
      var deadline = new Date(Date.parse(new Date()) + 5 * 60 * 60 * 1000);
      initializeClock('countdown', deadline);
    }
  }
 
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
 
var deadline = new Date(Date.parse(new Date()) + 5 * 60 * 60 * 1000);
initializeClock('countdown', deadline);

// Accordion

var accordion = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}