const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice()
    generateResute()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)

    if (randomNumber == 0) {
        computerChoice='rock'
    } else if (randomNumber == 1) {
        computerChoice = 'paper'
    } else if (randomNumber == 2) {
        computerChoice='scissors'
    }
    computerChoiceDisplay.innerHTML=computerChoice
}

function generateResute() {
    if (userChoice == computerChoice) {
        result = 'its a draw!'
    }
    else if (userChoice == 'rock' && computerChoice == "scissors"
        || userChoice == 'paper' && computerChoice == "rock"
        || userChoice == 'scissors' && computerChoice == "paper") {
        result = 'You win'
    }
    else {
        result = 'You lose'
    }
    resultDisplay.innerHTML = result
}