let userChoice = '';
let computerChoice = '';
let userScoreCount = 0;
let computerScoreCount = 0;
const buttons = document.querySelectorAll('.gameB');
const score = document.querySelector('.score');
const playMatch = document.querySelector('.play');
score.innerText = 'UserScore : 0 \n ComputerScore : 0';

function compareChoice(e){
    userChoice = this.innerText;
    this.classList.add('one');
    computerChoice = outFromcomputer();

    if(userChoice === computerChoice){
        userScoreCount += 1;
    }else{
        computerScoreCount += 1;
    }
    
    outputText();
}

function outputText(){
    score.innerText = `UserScore : ${userScoreCount} \n ComputerScore : ${computerScoreCount}`;
    if(userScoreCount === 5 || computerScoreCount === 5){
        buttons.forEach(button => {button.removeEventListener('click',compareChoice)});
        if(userScoreCount > computerScoreCount){
            score.innerText = 'User Won';
        }else{ 
            score.innerText = 'Computer Won';
            }
    }
}

function outFromcomputer(){
    let array = ['Rock','Paper','Scissor'];
    return array[Math.floor(Math.random()*3)];
}

function transitionFun(e){
    if(e.propertyName !== 'transform')return;
   this.classList.remove('one');
}

function rematchFunc(e){
    this.classList.add('one');
    userScoreCount = 0;
    computerScoreCount = 0;
    score.innerText = `UserScore : ${userScoreCount} \n ComputerScore : ${computerScoreCount}`;
    buttons.forEach(button => {button.addEventListener('click',compareChoice)});
    buttons.forEach(button => {button.addEventListener('transitionend',transitionFun)});
}

playMatch.addEventListener('click',rematchFunc);
playMatch.addEventListener('transitionend',transitionFun);