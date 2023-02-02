const input = document.querySelector('.guess-input')
const button = document.querySelector('.submit-button')

const maxTries = 15
var secretNum = parseInt(Math.random() * 1001);
var currenty_try = 0

const validateInput = ({ target }) => {
    if( target.value != '' && target.value > 0){
        button.removeAttribute('disabled')
    } else {
        button.setAttribute('disabled', '')
    }
}

const checkGuess = (event) => {
    event.preventDefault();
    
    if(currenty_try == maxTries){
        alert('Only 15 tries! New secret number, try again!')
        currenty_try = 0
        secretNum = parseInt(Math.random() * 1001);
        // console.log(secretNum)
    }

    currenty_try++
    // console.log(currenty_try)
    if(input.value == secretNum){
        alert('Your guess is RIGHT! New secret number, try again!')
        currenty_try = 0
        secretNum = parseInt(Math.random() * 1001);
    } else if (input.value > secretNum){
        alert('Try lesser...')
    } else if(input.value < secretNum){
        alert('Try bigger...')
    }
}

// console.log(secretNum)

input.addEventListener('input', validateInput);
button.addEventListener('click', checkGuess);






