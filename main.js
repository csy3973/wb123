window.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) {
    console.error('Theme toggle button not found!');
    return;
  }

  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateButtonText(currentTheme);

  themeToggle.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateButtonText(theme);
  });

  function updateButtonText(theme) {
    themeToggle.textContent = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  }
});
