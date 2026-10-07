// Practical 4: Light / Dark Theme Switcher with localStorage
document.addEventListener('DOMContentLoaded', function () {
    const themeBtn = document.getElementById('theme-toggle');
    const portalThemeBtn = document.getElementById('portal-theme-toggle');

    // 1. Read saved preference from localStorage on page load
    const savedTheme = localStorage.getItem('portal-theme');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        updateButtons(true);
    } else {
        document.body.classList.remove('dark-theme');
        updateButtons(false);
    }

    // 2. Helper function to update button text
    function updateButtons(isDark) {
        const text = isDark ? '☀️ Light' : '🌙 Dark';
        if (themeBtn) themeBtn.textContent = text;
        if (portalThemeBtn) portalThemeBtn.textContent = text;
    }

    // 3. Toggle theme function
    function toggleTheme() {
        const isDark = document.body.classList.toggle('dark-theme');
        updateButtons(isDark);
        // Save preference in localStorage
        localStorage.setItem('portal-theme', isDark ? 'dark' : 'light');
    }

    // 4. Attach event listeners
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
    if (portalThemeBtn) portalThemeBtn.addEventListener('click', toggleTheme);
});
