let calories = localStorage.getItem('calories');

if(calories!==null){
  document.querySelector('.calories-counter').innerHTML=`Current calories: ${calories}`;
  }
  else{
    localStorage.setItem('calories',"0");
    document.querySelector('.calories-counter').innerHTML=`Current calories: ${calories}`;
  }


function calculateCalories(grams){

const caloriesPerGram = 1.1;
let caloriesEaten = grams*caloriesPerGram;
let currentCalories = Number(localStorage.getItem('calories'));
let result = Math.round(currentCalories+caloriesEaten);
localStorage.setItem('calories',Math.round(currentCalories+caloriesEaten));
document.querySelector('.calories-counter').innerHTML = `Current Calories: ${result}`;
}