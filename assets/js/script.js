// To avoid creating too many variables in the global scope, everything will be contained within a function.
// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');

    // the less modern version of this syntax: for (let i = 0; i < buttons.length; i++){
    for (let button of buttons){
        button.addEventListener('click', function() {
            if(this.getAttribute('data-type') === 'submit') {
                alert('You clicked Submit!')
            } else {
                let gameType = this.getAttribute('data-type');
                // A template literal: backquotes
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnwswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}
