function start(state,game){

    game.createWizard(state.wizard)

    window.requestAnimationFrame(gameLoop.bind(null,state,game));
}

function gameLoop(state,game){

    const { wizard } = state;
    const { wizardElement } = game;

    //Move wizard
    if(state.keys.ArrowRight){
        wizard.posX += 10;
    }

    if(state.keys.ArrowLeft){
        wizard.posX -= 10;
    }

    if(state.keys.ArrowUp){
        wizard.posY -= 10;
    }

    if(state.keys.ArrowDown){
        wizard.posY += 10;
    }

    //Render

    wizardElement.style.left = wizard.posX + 'px';
    wizardElement.style.top = wizard.posY + 'px';
    
    window.requestAnimationFrame(gameLoop.bind(null,state,game));

}