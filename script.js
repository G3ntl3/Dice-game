'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.getElementById('dice');
const btnNew = document.getElementsByClassName('btnNew')
const btnRoll = document.getElementsByClassName('btnRoll')
const btnHold = document.querySelector('.btnHold')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')

diceEl.classList.add('hidden')
// let currentScore = 0
// let activePlayer = 0
// const scores = [0, 0]
// let playing = true

let activePlayer, currentScore, playing, scores
const initgame = () => {
    playing = true
    currentScore = 0
    activePlayer = 0
    scores = [0, 0]
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0
    current1El.textContent = 0
    diceEl.classList.add('hidden')
    player0.classList.remove('winner')
    player1.classList.remove('winner')
    player0.classList.add('playerIsActive')
}
initgame()
const changePlayer = () => {
    document.getElementById(`current--${activePlayer}`).innerText = currentScore = 0
    // currentScore=0
    if (activePlayer === 0) { activePlayer += 1 }
    else { activePlayer = 0 }
    player0.classList.toggle('playerIsActive')
    player1.classList.toggle('playerIsActive')
}

// code for dice roll 
const roll = () => {
    if (playing) {
        // Generate random  numbers
        const dicevalue = Math.trunc(Math.random() * 6) + 1;
        //    show the dice image  value 
        diceEl.classList.remove("hidden")
        dice.src = `dice-${dicevalue}.png`

        // // check if the value of the dice is
        if (dicevalue !== 1) {
            // //  add currentscores
            currentScore += dicevalue
            document.getElementById(`current--${activePlayer}`).innerText = currentScore
            // current0El.innerText=currentScore
            // console.log(currentScore);

        }
        // switch player 
        else {
            changePlayer()
        }
    }
}

btnHold.addEventListener('click', function () {

    if (playing) {
        scores[activePlayer] += currentScore

        document.getElementById(`score--${activePlayer}`).innerText = scores[activePlayer]
        // changePlayer()


        // check the winner when value is >= 80
        if (scores[activePlayer] >= 80) {
            document.querySelector(`.player--${activePlayer}`).classList.add('winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('playerIsActive')
            diceEl.classList.add("hidden")
            playing = false

        }
        else {
            changePlayer()
        }
    }
})


// btnNew.addEventListener('click', initgame)
function newgame(params) {
    initgame()
}