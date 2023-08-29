const buttons = document.querySelectorAll('.field-button');
const resetButton = document.querySelector('.reset-button');
const newGameButton = document.querySelector('.new-game');


const cross = 'X';
const circle = 'O';

let buttonsCount = 0;
let result = [];
let xWins = 0;
let oWins = 0;
let draws = 0;

for (let index = 0; index < buttons.length; index++) {

  let button = buttons[index];

  button.addEventListener('click',()=>{

    if(button.innerText===''&& result.length===0){
    
    if(buttonsCount%2===0){
      button.innerHTML = cross;
    }
    else{
      button.innerHTML = circle;
    }
      buttonsCount++;
  }
});

  button.addEventListener('click',()=>{
    result = checkForWin();
    let isGameEnded = result[0];
    let winner = result[1];

    if(isGameEnded===true){
      buttons.forEach(function(value){
        value.disabled = true;
      });
      if(winner === 'X'){
        xWins++;
      document.querySelector('.x-wins').innerHTML = `X: ${xWins}`;

      }
      else if(winner === 'O'){
        oWins++;
      document.querySelector('.o-wins').innerHTML = `O: ${oWins}`;
      }
      else if(buttonsCount === 9){
        draws++;
      document.querySelector('.draws').innerHTML = `Draws: ${draws}`;
      }
      if(winner==='X' || winner==='O'){
      document.querySelector('.message').innerHTML = `${winner} wins!`;
      }
      else{
        document.querySelector('.message').innerHTML = `It\`s a draw`;
      }
    }
  });
}
resetButton.addEventListener('click',()=>{
  document.querySelector('.x-wins').innerHTML = `X: 0`;
  document.querySelector('.o-wins').innerHTML = `O: 0`;
  document.querySelector('.draws').innerHTML = `Draws: 0`;
  buttons.forEach(function(value){
value.innerHTML = '';
  })
  document.querySelector('.message').innerHTML = '';
  result=[];
  xWins = 0;
  oWins = 0;
  draws = 0;
  buttonsCount = 0;
  buttons.forEach(function(value){
    value.disabled = false;
  });
});
newGameButton.addEventListener('click',()=>{
  buttons.forEach(function(value){
    value.innerHTML = '';
      })
      document.querySelector('.message').innerHTML = '';
      result=[];
  buttonsCount = 0;
  buttons.forEach(function(value){
    value.disabled = false;
  });
})


function checkForWin(){

  let firstButton = document.querySelector('.js-1button').innerHTML;
  let secondButton = document.querySelector('.js-2button').innerHTML;
  let thirdButton = document.querySelector('.js-3button').innerHTML;
  let fourthButton = document.querySelector('.js-4button').innerHTML;
  let fifthButton = document.querySelector('.js-5button').innerHTML;
  let sixthButton = document.querySelector('.js-6button').innerHTML;
  let seventhButton = document.querySelector('.js-7button').innerHTML;
  let eightButton = document.querySelector('.js-8button').innerHTML;
  let ninethButton = document.querySelector('.js-9button').innerHTML;
  
  let result = [];

if(firstButton==='X' && secondButton==='X' && thirdButton==='X'){
  result.push(true);
  result.push('X');
}
else if(firstButton==='O' && secondButton==='O' && thirdButton==='O'){
  result.push(true);
  result.push('O');
}
else if(firstButton==='X' && fourthButton==='X' && seventhButton==='X'){
  result.push(true);
  result.push('X');
}
else if(firstButton==='O' && fourthButton==='O' && seventhButton==='O'){
  result.push(true);
  result.push('O');
}
else if(secondButton==='X' && fifthButton==='X' && eightButton=== 'X'){
  result.push(true);
  result.push('X');
}
else if(secondButton==='O' && fifthButton==='O' && eightButton=== 'O'){
  result.push(true);
  result.push('O');
}
else if (fourthButton==='X' && fifthButton==='X' && sixthButton==='X'){
  result.push(true);
  result.push('X');
}
else if (fourthButton==='O' && fifthButton==='O' && sixthButton==='O'){
  result.push(true);
  result.push('O');
}
else if (thirdButton==='X' && sixthButton==='X' && ninethButton==='X'){
  result.push(true);
  result.push('X');
}
else if (thirdButton==='O' && sixthButton==='O' && ninethButton==='O'){
  result.push(true);
  result.push('O');
}
else if(seventhButton==='X' && eightButton==='X' && ninethButton==='X'){
  result.push(true);
  result.push('X');
}
else if(seventhButton==='O' && eightButton==='O' && ninethButton==='O'){
  result.push(true);
  result.push('O');
}
else if (thirdButton==='X' && fifthButton==='X' && seventhButton==='X'){
  result.push(true);
  result.push('X');
}
else if (thirdButton==='O' && fifthButton==='O' && seventhButton==='O'){
  result.push(true);
  result.push('O');
}
else if (firstButton==='X' && fifthButton==='X' && ninethButton==='X'){
  result.push(true);
  result.push('X');
}
else if (firstButton==='O' && fifthButton==='O' && ninethButton==='O'){
  result.push(true);
  result.push('O');
}
else if (buttonsCount===9) {
  result.push(true);
  result.push('draw');
}

return result;
}