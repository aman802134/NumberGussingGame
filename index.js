let gBtn = document.querySelector(".btn-g");
let input = document.querySelector("#input");
let guessM = document.getElementById("guess-m");
let submitBtn = document.getElementById("submit");
let level = document.getElementById("select");

gBtn.addEventListener("click", () => {
  let radomNum = Math.floor(Math.random() * level.value);
  sessionStorage.setItem("Guess", radomNum);

  document.getElementById("message").innerHTML= "Number Has Been Generated <br> Choose the number Between 1 - " + level.value;
  setTimeout(() => {
    document.getElementById("message").textContent = "";
  }, 2000);
});
let guess = 1;
submitBtn.addEventListener("click", () => {
  let num = sessionStorage.getItem("Guess");
  if (num == input.value) {
    guessM.textContent = "Hurray You Won !!!!!  " + "\n Number of guess  is "+guess;
  
  }else if(num > input.value){
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER");
  }else if(num < input.value){
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
  }

});



