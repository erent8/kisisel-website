// Yazı yazma efekti için
const aboutText = "Merhaba! Ben [Adınız], bir yazılım geliştiricisiyim. Blockchain, kriptografi ve veri analizi üzerine çalışıyorum.";
let index = 0;

function typeText() {
    const element = document.getElementById('about-text');
    if (index < aboutText.length) {
        element.textContent += aboutText.charAt(index);
        index++;
        setTimeout(typeText, 50);
    }
}

document.addEventListener('DOMContentLoaded', typeText);

// Tema değiştirme fonksiyonu
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    themeToggleButton.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark');
        themeToggleButton.classList.add('dark');
    }
};

// Proje filtreleme fonksiyonu
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('#project-list li');

filterButtons
