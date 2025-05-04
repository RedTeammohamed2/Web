const toggleBtn = document.getElementById('themeToggle');
const body = document.body;
const iconSun = document.getElementById('iconSun');
const iconMoon = document.getElementById('iconMoon');

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  iconSun.style.display = isDark ? 'none' : 'inline';
  iconMoon.style.display = isDark ? 'inline' : 'none';
});