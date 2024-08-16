
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');
const [sunIcon, moonIcon] = themeSwitch.querySelectorAll('svg');

const enableDarkmode = () => {
  document.body.classList.add('dark_mode');
  localStorage.setItem('darkmode', 'active');
  sunIcon.style.display = 'none';
  moonIcon.style.display = 'block';
}

const disableDarkmode = () => {
  document.body.classList.remove('dark_mode');
  localStorage.setItem('darkmode', 'inactive');
  sunIcon.style.display = 'block';
  moonIcon.style.display = 'none';
}

if (darkmode === 'active') {
  enableDarkmode();
} else {
  disableDarkmode();
}

themeSwitch.addEventListener('click', () => {
  darkmode = localStorage.getItem('darkmode');
  darkmode !== 'active' ? enableDarkmode() : disableDarkmode();
});
