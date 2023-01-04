// This function returns a random number with a "max" parameter.
function getRandomInt(max) {
    return (Math.floor(Math.random()*max))+1;
}

// Here I am setting a variable to the output of the random integer function (1-6) for further use.
var randomNumber1 = getRandomInt(6);
// Here I am getting a different random number for the second die using the same function above.
var randomNumber2 = getRandomInt(6);

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

// This function changes the src link based on randomNumber2 for the diceTwoImg.
function getRandomDice2() {
    if (randomNumber2 === 1) {
        diceTwoImg.src = "images/dice1.png";
    } else if (randomNumber2 === 2) {
        diceTwoImg.src = "images/dice2.png"
    } else if (randomNumber2 === 3) {
        diceTwoImg.src = "images/dice3.png"
    } else if (randomNumber2 === 4) {
        diceTwoImg.src = "images/dice4.png"
    } else if (randomNumber2 === 5) {
        diceTwoImg.src = "images/dice5.png"
    } else {
        diceTwoImg.src = "images/dice6.png"
    }
}

// Here I am invoking the functions to actually make them work when the page is refreshed.
getRandomDice1();
getRandomDice2();

// Here I am setting the variable changeText to the H1 in the DOM for use in the below function.
var changeText = document.querySelector("h1")
// Here I am changing the innerText of the H1 element based on which randomNumber is higher. I also set a condition for a draw.
function whoWon() {
    if (randomNumber1 > randomNumber2) {
        changeText.innerText = "Player 1 Wins!"
    } else if (randomNumber1 === randomNumber2) {
        changeText.innerText = "It's a Draw!"
    } else {
        changeText.innerText = "Player 2 Wins!"
    }
}

// Here I am invoking the whoWon() function so it works when the page is refreshed.
whoWon();

console.log(randomNumber1);
console.log(randomNumber2);