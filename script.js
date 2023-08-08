const star = document.querySelector('.star');
const timer = document.getElementById('timer');

let starPosX = 0;
let starPosY = 0;
let remainingTime = 15;

function updateTimer() {
    timer.textContent = remainingTime;
}

function moveStar() {
    star.style.transform = `translate(${starPosX}px, ${starPosY}px)`;
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            starPosY = Math.max(starPosY - 10, 0);
            moveStar();
            break;
        case 'ArrowDown':
            starPosY = Math.min(starPosY + 10, window.innerHeight - 80);
            moveStar();
            break;
        case 'ArrowLeft':
            starPosX = Math.max(starPosX - 10, 0);
            moveStar();
            break;
        case 'ArrowRight':
            starPosX = Math.min(starPosX + 10, window.innerWidth - 80);
            moveStar();
            break;
        default:
            break;
    }
});

function startTimer() {
    const interval = setInterval(() => {
        remainingTime--;
        updateTimer();
        
        if (remainingTime === 0) {
            clearInterval(interval);
            alert("Time's up!");
        }
    }, 1000);
}

startTimer();
