let startScreen = document.querySelector('.start-screen');
let gameScreen = document.querySelector('.game-screen');

startScreen.addEventListener('click', () => {
   startScreen.classList.add('hidden');
   gameScreen.classList.remove('hidden');
})