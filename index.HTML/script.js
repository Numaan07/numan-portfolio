const toggleBtn = document.querySelector('.toggle-btn');
const body = document.body;

// Load saved mode
if (localStorage.getItem('mode') === 'dark') {
  body.classList.add('dark');
  toggleBtn.textContent = '☀️';
  toggleBtn.setAttribute('aria-pressed', 'true');
}

// Toggle dark mode
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  toggleBtn.textContent = isDark ? '☀️' : '🌙';
  toggleBtn.setAttribute('aria-pressed', isDark);
  localStorage.setItem('mode', isDark ? 'dark' : 'light');
});

// Fade-in on scroll
const sections = document.querySelectorAll('section, header');
function revealOnScroll() {
  const windowHeight = window.innerHeight;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);