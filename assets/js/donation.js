const toggler = document.querySelector('.navbar-toggler');
const header = document.querySelector('.nav-header');
let open = false;

toggler.addEventListener('click', () => {
  if(!open) {
    header.classList.add('header');
    open = true;
  } else {
    header.classList.remove('header');
    open = false;
  }
})