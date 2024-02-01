// To avoid creating too many variables in the global scope, everything will be contained within a function.
// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');

    // the less modern version of this syntax: for (let i = 0; i < buttons.length; i++){
    for (let button of buttons){
        button.addEventListener('click', function() {
            if(this.getAttribute('data-type') === 'submit') {
                checkAnswer();
            } else {
                let gameType = this.getAttribute('data-type');
                // A template literal: backquotes. Placeholder for game to see if the buttons are working before adding the game: alert(`You clicked ${gameType}`);
                runGame(gameType);
            }
        })
    }

    runGame('addition');

})

/**
 * The main game "loop", called when the script is first laoded
 * and after the user's answer has been processed
 */
function runGame(gameType) {
    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}

/**
 * Checks the answer against the first element in the returned calculatedCorrectAnswer array
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnwswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right! :D")
    } else {
        alert(`Awwww... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
    }

    runGame(calculatedAnswer[1]);
}

/**
 * Gets the operands (the numbers) and the operator (+, -, *, /)
 * directly from the DOM and returns the correct answer
 */
function calculateCorrectAnwswer() {
    // parseInt turns the string from the DOM into a number to be able to perform mathematical operations
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {
    return [operand1 + operand2, "addition"]
    } else {
        alert(`Unimplmented operator ${operator }`);
        throw `Unimplmented operator ${operator}.Aborting!`;   
    }
}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}
