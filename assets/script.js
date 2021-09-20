const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');


menuBtn.addEventListener('click', function () {
  this.classList.toggle('active');
  nav.classList.toggle('active');
});