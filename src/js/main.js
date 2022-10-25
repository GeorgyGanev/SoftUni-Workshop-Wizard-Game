
let state = initState();
let game = initGameObjects();

const availableKeys = [
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight'
]

document.addEventListener('keydown', (e) => {
    if (availableKeys.includes(e.code)){
        state.keys[e.code] = true;
    }
});

document.addEventListener('keyup', (e) => {
    if (availableKeys.includes(e.code)){
        state.keys[e.code] = false;
    }
});


game.startScreen.addEventListener('click', () => {
   game.startScreen.classList.add('hidden');
   game.gameScreen.classList.remove('hidden');

    //start game
    start(state,game);





})