// This function returns a random number with a "max" parameter.
function getRandomInt(max) {
    return (Math.floor(Math.random()*max))+1;
}

// Here I am setting a variable to the output of the random integer function (1-6) for further use.
var randomNumber1 = getRandomInt(6);

// These 3 lines of code select the images from the DOM and store them as seperate variables from the array that is returned using querySelectorAll.
const diceImages = document.getElementsByTagName("img")
var diceOneImg = diceImages[0];
var diceTwoImg = diceImages[1];

// This function changes the src link for the corresponding image based on what randomNumber1 is.
function getRandomDice1() {
    if (randomNumber1 === 1) {
        diceOneImg.src = "images/dice1.png";
    } else if (randomNumber1 === 2) {
        diceOneImg.src = "images/dice2.png"
    } else if (randomNumber1 === 3) {
        diceOneImg.src = "images/dice3.png"
    } else if (randomNumber1 === 4) {
        diceOneImg.src = "images/dice4.png"
    } else if (randomNumber1 === 5) {
        diceOneImg.src = "images/dice5.png"
    } else {
        diceOneImg.src = "images/dice6.png"
    }
}

getRandomDice1();

console.log(randomNumber1);