function start(state,game){

    game.createWizard(state.wizard)

    window.requestAnimationFrame(gameLoop.bind(null,state,game));
}

function gameLoop(state,game){

    const { wizard } = state;
    const { wizardElement } = game;

    //Move wizard
    if(state.keys.ArrowRight){
        wizard.posX = Math.min(wizard.posX + wizard.speed, game.gameScreen.offsetWidth - wizard.width);
    }

    if(state.keys.ArrowLeft){
        wizard.posX = Math.max(wizard.posX - wizard.speed,0);
    }

    if(state.keys.ArrowUp){
        wizard.posY = Math.max(wizard.posY - wizard.speed, 0);
    }

    if(state.keys.ArrowDown){
        wizard.posY = Math.min(wizard.posY + wizard.speed, game.gameScreen.offsetHeight - wizard.height);
    }

    //Render

    wizardElement.style.left = wizard.posX + 'px';
    wizardElement.style.top = wizard.posY + 'px';
    
    window.requestAnimationFrame(gameLoop.bind(null,state,game));

}