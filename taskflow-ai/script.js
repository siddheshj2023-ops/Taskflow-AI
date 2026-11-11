const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
const message = document.getElementById('formMessage');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  message.className = 'form-message';
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const team = form.elements.team.value;
  if (name.length < 2) {
    message.textContent = 'Please enter your name (at least 2 characters).';
    message.classList.add('error');
    form.elements.name.focus();
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    message.textContent = 'Please enter a valid email address.';
    message.classList.add('error');
    form.elements.email.focus();
    return;
  }
  if (!team) {
    message.textContent = 'Please select your team size.';
    message.classList.add('error');
    form.elements.team.focus();
    return;
  }
  message.textContent = `Thanks, ${name}! Your demo request has been recorded in this demo.`;
  message.classList.add('success');
  form.reset();
});
