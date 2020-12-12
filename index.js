//for first dice image

var randomnumber1=Math.floor(Math.random() * 6)+ 1; //1 - 6
var randomimage1="dice" + randomnumber1 +".png"; //dice1.png - dice6-png
var randomimagesource1="images/" + randomimage1; //images/dice1.png - images/dice6.png
var image1=document.querySelectorAll("img")[0]; //get the source of first image
image1.setAttribute("src",randomimagesource1); //set the source of firstimage

// for second dice images

var randomnumber2=Math.floor(Math.random() * 6)+ 1;
var randomimage2="dice" +  randomnumber2 +  ".png";
var randomimagesource2="images/" + randomimage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagesource2);

// if player1 wins!!

if(randomnumber1>randomnumber2)
{
  document.querySelector("h1").innerText="Player1 Wins😄";
}
// if player2 wins!!
else if(randomnumber1<randomnumber2)
{
  document.querySelector("h1").innerText="player2 Wins😆";
}
// if Draw
else
{
  document.querySelector("h1").innerText="Draw!!🙁";
}
