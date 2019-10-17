/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
// generate a random number betwwen 1 and 6
//dice = Math.floor(Math.random() * 6) + 1;
//console.log(dice);

// SETTER
// gets a id fromt he css and asings the value of that element to whatever the dice roll is 
//document.querySelector('#current-' + activePlayer).textContent = dice;


// this code is used to alter html tags and elements (inner html)
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em';

var scores, roundScore, activePlayer, gamePlaying;

initGame();

var lastDice;

// GETTER
// gets a value from the Html text value (not tag) and assigns it to the x variable 
var x = document.querySelector('#score-0').textContent;
//console.log(x);


// gets the btn roll class in the html and adds a click event listener (event, function to be called)
document.querySelector('.btn-roll').addEventListener('click', function() { 
    
    
    if(gamePlaying){
        
             // 1.Random number generate a random number betwwen 1 and 6
                var dice1 = Math.floor(Math.random() * 6) + 1;
                var dice2 = Math.floor(Math.random() * 6) + 1;
                

                // 2 display the result 
                document.getElementById('dice-1').style.display = 'block';
                document.getElementById('dice-2').style.display = 'block';
                document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
                document.getElementById('dice-1').src = 'dice-' + dice2 + '.png';
        
                //reverts the dice display style back to block so you can see it.
//                diceDom.style.display = 'block';
                // selects the image src for the dice roll and sets it to whatever the dice math function has landed on 
//                diceDom.src = 'dice-' + dice + '.png';


                // 3 update the round score IF the rolled was not 1 (game rule)
        
                if (dice1 !== 1 && dice2 !==1) {
                    // add score
                    roundScore += dice1 + dice2;
                    document.querySelector('#current-' + activePlayer).textContent = roundScore;

                } else {

                    nextPlayer();
                }
//                if (dice === 6 && lastDice === 6) {
//                    //player loses score
//                    scores[activePlayer] = 0;
//                    document.querySelector('#score-' + activePlayer).textContent = 0;
//                    nextPlayer();
//                    
//                } else 
        
    }
});

        


/////////////////////////////////////////////////////////////////////////////////////


document.querySelector('.btn-hold').addEventListener('click', function (){
    
    if (gamePlaying) {
    //add current score to the global score 
    scores[activePlayer] += roundScore;
    
    
    // update the UI 
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
    var input = document.querySelector('.final-score').value;
        
    // undefined, 0, null or empty string "" are COERCED to false
    // anything else is COERCED to true
        if (input) {
            
            var winningscore = input;
            
        } else {
            
            winningscore = 100;
        }
    
    // check if player won the game 
    if (scores[activePlayer] >= winningscore){
        
    document.querySelector('#name-' + activePlayer).textContent = 'winner';
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    
    gamePlaying = false;
        
    } else {
        
    // next player
    nextPlayer();
        
        }
    }
});




/////////////////////////////////////////////////////////////////////////////////////

function nextPlayer(){
    
        // next player
        // ternary operator that replaces an if statement
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
        // sets the score back to 0
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
    
        document.querySelector('.player-0-panel').classList.toggle('active');
        
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        // the active class on the panel gets removed
//        document.querySelector('.player-0-panel').classList.remove('active');
//        document.querySelector('.player-1-panel').classList.add('active');
        
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
    
}
    
        // calls a new game 
        document.querySelector('.btn-new').addEventListener('click', initGame);



    // fucntion used to initalise a new game
        function initGame() {
            
            scores = [0, 0];
            activePlayer = 0;
            roundScore = 0;
            gamePlaying = true;
            
            // this code is used to change the value of a css property (set display to none)
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';

            document.getElementById('score-0').textContent = '0';
            document.getElementById('score-1').textContent = '0';
            // gets the element by name and sets it to 0
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';
            
            
            document.getElementById('name-0').textContent = 'Player 1';
            document.getElementById('name-1').textContent = 'Player 2';
            
            document.querySelector('.player-0-panel').classList.remove('winner');
            document.querySelector('.player-1-panel').classList.remove('winner');
            
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.remove('active');
            
            
            document.querySelector('.player-0-panel').classList.add('active');
            
        };

/////////////////////////////////////////////////////////////////////////////////////


















