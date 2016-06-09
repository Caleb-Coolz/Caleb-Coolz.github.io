var guess = document.getElementById('guess')
var message = document.getElementById('message')
var guesses = document.getElementById('guesses')


var numberGuesses = 6
var number = Math.floor(Math.random()*(100))+1
function checkNumber() {
    numberGuesses = numberGuesses - 1
    guesses.textContent = numberGuesses
    
        
    var userGuess = parseInt(guess.value)

    if (userGuess == number) {
        message.textContent='Correct! Reload the page to play again.'
    }
    if (userGuess > number) {
        message.textContent='Guess is too high.'
    }
    if (userGuess < number) {
        message.textContent='Guess is too low.'
    }
      if(numberGuesses <= 0) {
      message.textContent='You lose! Reload the page to play again. The correct number was ' + number + '.'
  
      
    }
}
