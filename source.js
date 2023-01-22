
function getUserChoice(){
   const UserIn = prompt("Type your choice- Rock Paper Scissor ");
    return UserIn;
}

function getComputerChoice(){
    const gameChoice = ['Rock','Paper','Scissor'];
    const randChoice = (Math.floor(Math.random()*3));
  const CompOut = gameChoice[randChoice];
  console.log(CompOut);
    return CompOut;
}

for(let i = 0;i<5;i++){
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    if(userChoice.toUpperCase()===computerChoice.toUpperCase()){
        alert("You won");
        break;
    }else{
        alert("You lost try again your choice was "+`${userChoice}`+" But Computers choice was "
        +`${computerChoice}`+' and you have '+`${5-i-1}`+" tries left");
        
    }
}