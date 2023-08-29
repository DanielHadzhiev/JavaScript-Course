let calories = localStorage.getItem('calories');

if(calories!==null){
document.querySelector('.calories-counter').innerHTML=`Current calories: ${calories}`;
}
else{
  localStorage.setItem('calories',"0");
  document.querySelector('.calories-counter').innerHTML=`Current calories: ${calories}`;
}

function connectPages (input){

  if(input === 'tuna'){
  window.location.href = "tuna.html";
  }
  else if(input === 'pasta'){
    window.location.href = "pasta.html";
  }
  else if(input === 'chicken fillet'){
    window.location.href = "chicken-fillet.html"
  }
  }
