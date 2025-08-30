const toggleBtn = document.querySelector('.menu-toggle');
const navOverlay = document.querySelector('.nav-overlay');

toggleBtn.addEventListener('click', () => {
  navOverlay.classList.toggle('active');
  toggleBtn.textContent = 
    navOverlay.classList.contains('active') ? '✖' : '☰';
});