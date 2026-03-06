document.body.style.overflowX = 'hidden';
document.documentElement.style.overflowX = 'hidden';

const menuIcon = document.getElementById('menu-icon');
const navlist = document.querySelector('.navlist');

menuIcon.addEventListener('click', () => {
  navlist.classList.toggle('open');
});

const navLinks = document.querySelectorAll('.navlist a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navlist.classList.remove('open');
  });
});
