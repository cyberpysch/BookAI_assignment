
document.getElementById('generateApiKey').addEventListener('click', function () {
    fetch('/generate-api-key', {
        method: 'POST',
    })
        .then(response => response.json())
        .then(data => {
            const apiKeyDisplay = document.getElementById('apiKeyDisplay');
            apiKeyDisplay.innerHTML = `Your API Key: <strong>${data.api_key}</strong>`;
            apiKeyDisplay.style.opacity = '0';
            setTimeout(() => {
                apiKeyDisplay.style.opacity = '1';
            }, 100);
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('apiKeyDisplay').innerHTML = 'Error generating API key';
        });
});

const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleButton.textContent = 'Switch to Light Mode';
}

toggleButton.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    toggleButton.textContent = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});