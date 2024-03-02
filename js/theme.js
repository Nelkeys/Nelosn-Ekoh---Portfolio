// Function to toggle dark mode
function toggleDarkMode() {

    document.getElementById('moon').style.display = 'none';
    document.getElementById('sun').style.display = 'block';

    localStorage.setItem('theme', 'dark');
    
    document.body.classList.add('dark-mode');
}

function toggleLightMode() {

    document.getElementById('moon').style.display = 'block';
    document.getElementById('sun').style.display = 'none';

    localStorage.setItem('theme', 'light');

    document.body.classList.remove('dark-mode');
}

// Function to set the theme based on user preference in localStorage
function setThemeFromLocalStorage() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        toggleDarkMode();
    } else {
        toggleLightMode();
    }
}
