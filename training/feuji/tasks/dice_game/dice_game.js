 /******************** TWO PLAYERED DICE GAME RULES **********************/
   
   /* Its a 2 players dice game having a single dice to roll.
      The players can roll as many times as they want and can hold the game by clicking on the hold button then their round score will be added to their 
      game score and the players will be switched.But whenever the current player got 1 on rolling the dice the total round score will be zero and the 
      game will be switched to another player. If any of the player reaches their game score to 100 or above that player will be considered as winner.    */
   /* NEW GAME on clicking on the newgame button the players can start a new game */


// players
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// global scores
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

// round scores
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// dice image
const diceEl = document.querySelector('.dice');

// new game button
const btnNew = document.querySelector('.btn--new');

// roll button
const btnRoll = document.querySelector('.btn--roll');

// hold button
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;

// hidden dice image
diceEl.classList.add('hidden');
let currentscore = 0;

//round scores of both the players
const scores = [0, 0];
let activePlayer = 0;
let playing = true;

// switching players
  const switchPlayer = function () {
   currentscore = 0;
   document.getElementById(`current--${activePlayer}`).textContent =
      currentscore;
   activePlayer = activePlayer == 0 ? 1 : 0;
   player0El.classList.toggle('player--active');
   player1El.classList.toggle('player--active');
};

//  roll dice function
btnRoll.addEventListener('click', function () {
   if (playing) {
      diceEl.classList.remove('hidden');
      const dice = Math.trunc(Math.random() * 6) + 1;
      console.log(dice);
      diceEl.src = `images/dice-${dice}.png`;
      if (dice !== 1) {
         currentscore += dice;
         document.getElementById(`current--${activePlayer}`).textContent =
            currentscore;
      } else {
         switchPlayer();
      }
   }
});

// hold button function
let active = 0;
btnHold.addEventListener('click', function () {
   if (playing) {
      scores[activePlayer] += currentscore;
      document.getElementById(`score--${activePlayer}`).textContent =
         scores[activePlayer];
      if (scores[activePlayer] >= 10) {
         playing = false;
         diceEl.classList.add('hidden');
         document.getElementById(`score--${activePlayer}`).textContent = 'WON🥳';
         switchPlayer();
         document.getElementById(`score--${activePlayer}`).textContent = 'Lost🙁';
         document
            .querySelector(`.player--${activePlayer}`)
            .classList.add('player--winner');
         active = activePlayer == 1 ? 0 : 1;
         document
            .querySelector(`.player--${active}`)
            .classList.add('player--active');
      } else {
         switchPlayer();
      }
   }
});

// new game
btnNew.addEventListener('click', function () {
   playing = true;
   document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--winner');
   activePlayer = 0;
   document.querySelector('.player--0').classList.add('player--active');
   document.querySelector('.player--1').classList.remove('player--active');
   scores[0] = 0;
   scores[1] = 0;
   document.getElementById('score--0').textContent = 0;
   document.getElementById('score--1').textContent = 0;
});


