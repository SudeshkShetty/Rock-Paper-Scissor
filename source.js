let userChoice = '';
let computerChoice = '';
let userScoreCount = 0;
let computerScoreCount = 0;
const buttons = document.querySelectorAll('.gameB');
const score = document.querySelector('.score');
const playMatch = document.querySelector('.play');
const outPutPrompt = document.querySelector('.outPut');
score.innerText = 'UserScore : 0 \n ComputerScore : 0';

function outFromcomputer(){
    let array = ['Rock','Paper','Scissor'];
    return array[Math.floor(Math.random()*3)];
}

function compareGameLogic(){
   if(userChoice === computerChoice){
        outPutPrompt.innerText = `Match tied since YourChoice and ComputerChoice Were ${userChoice}`;
        return;
   }else{
        if(userChoice === 'Rock' && computerChoice === 'Scissor'||userChoice === 'Paper' && computerChoice === 'Rock'||userChoice === 'Scissor' && computerChoice === 'Paper'){
            outPutPrompt.innerText = `You Won This Round since ${userChoice} beats ${computerChoice}`;
            userScoreCount += 1;
        }else{
            outPutPrompt.innerText = `Computer WoN This Round since ${computerChoice} beats ${userChoice}`;
            computerScoreCount += 1;
        }
   }
   outputGameCount();
}

function displayResultFunc(){
    if(userScoreCount>computerScoreCount){
    score.innerText = `You won`;
}else{
    score.innerText = `You lost`;
}
}

function outputGameCount(){
    score.innerText = `UserScore : ${userScoreCount} \n ComputerScore : ${computerScoreCount}`;
    if(userScoreCount === 5 || computerScoreCount === 5){
        buttons.forEach(button => {button.removeEventListener('click',addClass)});
        displayResultFunc();
    }
}

function addClass(e){
    this.classList.add('one');
    userChoice = this.innerText;
    computerChoice = outFromcomputer();
    compareGameLogic();    
    outputGameCount();
}

function transitionFun(e){
    if(e.propertyName !== 'transform')return;
   this.classList.remove('one');
}

function clickToPlay(e){
    outPutPrompt.innerText = '';
    this.classList.add('one');
    userScoreCount = 0;
    computerScoreCount = 0;
    score.innerText = `UserScore : ${userScoreCount} \n ComputerScore : ${computerScoreCount}`;
    buttons.forEach(button => {button.addEventListener('click',addClass)});
    buttons.forEach(button => {button.addEventListener('transitionend',transitionFun)});
}

playMatch.addEventListener('click',clickToPlay);
playMatch.addEventListener('transitionend',transitionFun);