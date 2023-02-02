const input = document.querySelector('.guess-input')
const button = document.querySelector('.submit-button')
const form = document.querySelector('.input-container')

const secretNum = parseInt(Math.random() * 1001);

const validateInput = ({ target }) => {
    if( target.value != '' && target.value > 0){
        button.removeAttribute('disabled')
    } else {
        button.setAttribute('disabled', '')
    }
}

const checkGuess = () => {
    event.preventDefault();

    if(input.value == secretNum){
        alert('Your guess is RIGHT!!')    
    } else if (input.value > secretNum){
        alert('Try lesser...')
    } else if(input.value < secretNum){
        alert('Try bigger...')
    }
}

console.log(secretNum)
input.addEventListener('input', validateInput);
button.addEventListener('click', checkGuess);

console.log(secretNum)




