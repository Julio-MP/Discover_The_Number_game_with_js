let arrayNumbers = []
let secretNumber = ramdomNumber();

arrayNumbers.push(secretNumber)
localStorage.setItem('arrayNumbers', JSON.stringify(arrayNumbers));
const stored = JSON.parse(localStorage.getItem('arrayNumbers'));



arrayNumbers.push(secretNumber);
console.log(arrayNumbers)


let attempts = 1


//Aqui a função escreve a mensagem do criador do jogo na tela, mas ela não armazena nada, por isso usamos um parametro dentro da função (pra escrever o texto que a gente quer que ele seja escrito) mas não usou return porque não queremos que ele salve nada (o texto que ele escreveu ficou "perdido" na memoria do programa, mas ta na tela que é isso que importa)
function rightThings(tag, text) {
    let tittle = document.querySelector(tag);
    tittle.innerHTML = text;
}


rightThings('h1', 'Secrete Number Game')

rightThings('p', 'Choose a number between 1 and 100')

// Aqui a gente quer qeu ele execute uma função mais automata 
function verifytheGuess() {
    let theGuess = document.querySelector('input').value;
    if (theGuess == secretNumber) {
        rightThings('h1', 'You Win!');
        rightThings('p', `Number of attempts: ${attempts}`);
        document.getElementById('restart').removeAttribute('disabled')
        
        
    
    }
    
    else {
        if (theGuess > secretNumber) {
            rightThings('p', `It's lower than ${theGuess}`);
            
        }

        else {
            rightThings('p', `It's bigger than ${theGuess}`);
            
        }
        attempts++
        cleanInput();
    }
    

}


document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        verifytheGuess();}

})

//Aqui a gente quer que ele gere um numero pra gente usa-lo no sistema depois, então temos que salvar esse numero, e pra isso a gente usa o return 
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

console.log(secretNumber);