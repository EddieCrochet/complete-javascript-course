/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. 
After that, it's the next player's turn. (Hint: Always save the previous 
    dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score,
 so that they can change the predefined score of 100. (Hint: you can 
    read that value with the .value property in JavaScript. This is a 
    good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The 
player looses his current score when one of them is a 1. (Hint: you will 
    need CSS to position the second dice, so take a look at the CSS code 
    for the first one.)
*/

var scores, roundScore, activePlayer,
 gamePlaying, previousRoll, previousRoll2, input;

init();


document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        //1. need a random number
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        //2. display result to first die
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        //and second die
        var dice2DOM = document.querySelector('.dice2');
        dice2DOM.style.display = 'block';
        dice2DOM.src = 'dice-' + dice2 + '.png';

        if ((dice === 6 || dice2 === 6) && (previousRoll === 6 || previousRoll2 === 6)) {
            //correct score of active playerS
            scores[activePlayer] = 0;
            // Update UI
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            nextPlayer();
        } else if (dice !== 1 && dice2 !== 1) {
            //3. update the round score IF the rolled # was NOT a 1
            previousRoll = dice;
            previousRoll2 = dice2;
            //Add score
            roundScore += (dice + dice2);
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
            nextPlayer();
        }

    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        input = document.getElementById('scoreToWin').value;
        
        if(input) {
            winScore = input;
        } else {
            winScore = 100;
        }
        // Add CURRENTscore to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player won the game
        if (scores[activePlayer] >= winScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next Player
            nextPlayer();
        }
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    previousRoll = 0;
    previousRoll2 = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    //reset stats
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}