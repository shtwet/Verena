document.getElementById('start-btn').addEventListener('click', function() {
    // Herzen explodieren lassen
    createHeartStorm();

    // Nach einer kurzen Verzögerung den Bildschirm wechseln
    setTimeout(() => {
        document.getElementById('welcome-screen').classList.add('hidden');
        document.getElementById('welcome-screen').classList.remove('active');
        
        document.getElementById('main-screen').classList.remove('hidden');
        document.getElementById('main-screen').classList.add('active');
        
        // Weiterhin ab und zu ein Herz hochfliegen lassen
        setInterval(spawnSingleHeart, 300);
    }, 800);
});

function createHeartStorm() {
    const container = document.getElementById('heart-container');
    const heartCount = window.innerWidth < 600 ? 40 : 80;

    for (let i = 0; i < heartCount; i++) {
        setTimeout(() => {
            spawnSingleHeart();
        }, i * 35);
    }
}

function spawnSingleHeart() {
    const container = document.getElementById('heart-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Zufällige Position auf der X-Achse
    heart.style.left = Math.random() * 100 + 'vw';
    
    // Zufällige Größe (wird jetzt sauber via CSS-Variable übergeben)
    const size = Math.random() * 15 + 12; // Zwischen 12px und 27px
    heart.style.setProperty('--size', size + 'px'); 

    // Nur noch schöne Rot-, Rosa- und Pinktöne (KEIN Gelb mehr!)
    const colors = ['#ff4d6d', '#ff758f', '#ff8fa3', '#c9184a', '#ff0a54', '#ff5c8a'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    heart.style.setProperty('--heart-color', randomColor);

    // Zufällige Animationsdauer
    const duration = Math.random() * 2 + 3; 
    heart.style.animationDuration = duration + 's';

    container.appendChild(heart);

    // Herz löschen, sobald die Animation vorbei ist
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}