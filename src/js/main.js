
let state = initState();
let game = initGameObjects();


startScreen.addEventListener('click', () => {
   startScreen.classList.add('hidden');
   gameScreen.classList.remove('hidden');
})