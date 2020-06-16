
//dice no.1
//variable to select random number 1-6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//variable to select images e.g dice1.png - dice6.png at random
var randomDiceImg = "./images/dice" + randomNumber1 + ".png";
//variable to select image 1
var image1 = document.querySelector(".img1");
//randomising the first image attribute on page refresh
image1.setAttribute("src", randomDiceImg);

//dice no.2
//variable to select random number 1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//variable to select images e.g dice1.png - dice6.png at random
var randomDiceImg2 = "./images/dice" + randomNumber2 + ".png";
//variable to select image 2
var image2 = document.querySelector(".img2");
//randomising the second image attribute on page refresh
image2.setAttribute("src", randomDiceImg2);

//button to refresh page
function refreshPage(){
    window.location.reload();
}

if (randomNumber1 > randomNumber2) {
 document.querySelector(".heading").innerhtml = "Player 1 wins!🏆";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector(".heading").innerhtml = "Player 2 wins!🏆";
}
else {
  document.querySelector(".heading").innerhtml = "Draw!👏";
}
