
let state = initState();
let game = initGameObjects();


game.startScreen.addEventListener('click', () => {
   game.startScreen.classList.add('hidden');
   game.gameScreen.classList.remove('hidden');

    //start game
    start(state,game);





})