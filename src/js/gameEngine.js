function start(state,game){

    game.createWizard(state.wizard)

    window.requestAnimationFrame(gameLoop.bind(null,state,game));
}

function gameLoop(state,game,timestamp){

    const { wizard } = state;
    const { wizardElement } = game;

    //Move wizard
    modifyWizardPosition(state,game);

    if (state.keys.Space){
        
        game.wizardElement.style.backgroundImage = 'url("./images/wizard-fire.png")';
        
        game.createFireball(wizard, state.fireball);

    } else {
        game.wizardElement.style.backgroundImage = 'url("./images/wizard.png")';
    }


    //Spawn bugs
    if (timestamp > state.bugStats.nextSpawnTimestamp){
        game.createBug(state.bugStats);
        state.bugStats.nextSpawnTimestamp = timestamp + Math.random() * state.bugStats.maxSpawnInterval; 
    }    

    //Render bugs
    let bugElements = document.querySelectorAll('.bug');
    bugElements.forEach(bug => {
        let posX = parseInt(bug.style.left);
        
        if (posX > 0){
            bug.style.left = posX - state.bugStats.speed + 'px';
        } else {
            bug.remove();
        }
       
    })

    //Render Fireball
    document.querySelectorAll('.fireball').forEach(fireball => {
        let posX = parseInt(fireball.style.left);

        //Detect collision
        bugElements.forEach(bug => {
            if (detectCollision(bug, fireball)){
                bug.remove();
                fireball.remove();
            }
        })
 
        if (posX > game.gameScreen.offsetWidth){
            fireball.remove();
        } else {
            fireball.style.left = posX + state.fireball.speed + 'px';
        }
    })

    //Render Wizard
    wizardElement.style.left = wizard.posX + 'px';
    wizardElement.style.top = wizard.posY + 'px';
    

    window.requestAnimationFrame(gameLoop.bind(null,state,game));
}

function modifyWizardPosition(state,game){

    const { wizard } = state; 

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
}

function detectCollision(objectA, objectB){
    const first = objectA.getBoundingClientRect();
    const second = objectB.getBoundingClientRect();

    const hasCollision = !(first.top > second.bottom || first.bottom < second.top || first.right < second.left || first.left > second.right);

    return hasCollision;
}