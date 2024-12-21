const music = document.getElementById('music');
const musicToggle = document.getElementById('music-toggle');

musicToggle.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        musicToggle.textContent = 'Müziği Kapat';
    } else {
        music.pause();
        musicToggle.textContent = 'Müziği Aç';
    }
});

// Sayfa yüklendiğinde müziği otomatik başlatma (isteğe bağlı)
// window.addEventListener('load', () => {
//     music.play();
//     musicToggle.textContent = 'Müziği Kapat';
// });
