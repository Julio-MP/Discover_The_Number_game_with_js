
let secretNumber = ramdomNumber();


let attempts = 1


// Here the function writes the message from the game creator on the screen, but it doesn't store anything, so we use a parameter inside the function (to write the text we want it to be written) but we didn't use return because we don't want it to save anything (the text it wrote was "lost" in the program's memory, but it's on the screen, which is what matters)
function enterNumber(tag, text) {
    let tittle = document.querySelector(tag);
    tittle.innerHTML = text;
}


enterNumber('h1', 'Secrete Number Game')

enterNumber('p', 'Choose a number between 1 and 100')

// Here we want it to execute a more automated function
function verifytheGuess() {
    let theGuess = document.querySelector('input').value;
    if (theGuess == secretNumber) {
        enterNumber('h1', 'You Win!');
        enterNumber('p', `Number of attempts: ${attempts}`);
        document.getElementById('restart').removeAttribute('disabled')
        
        
    
    }
    
    else {
        if (theGuess > secretNumber) {
            enterNumber('p', `It's lower than ${theGuess}`);
            
        }

        else if (theGuess == '') {
            enterNumber('p', `Enter a valid number`)
            attempts --
        }

        else {
            enterNumber('p', `It's bigger than ${theGuess}`);
            
        }
        attempts++
        cleanInput();
    }
    

}


document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        verifytheGuess();}

})

//Here we want it to generate a number for us to use in the system later, so we have to save this number, and for that we use return
function ramdomNumber() {
    return parseInt(Math.random() *100 +1);
    
}

function cleanInput() {
    Guess = document.querySelector('input');
    Guess.value = '';
    Guess.focus()
}

function restart() {
    location.reload();
}
