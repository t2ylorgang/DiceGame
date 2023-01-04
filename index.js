// This function returns a random number with a "max" parameter.
function getRandomInt(max) {
    return (Math.floor(Math.random()*max))+1;
}

// Here I am setting a variable to the output of the random integer function (1-6) for further use.
var randomNumber1 = getRandomInt(6);

// These 3 lines of code select the images from the DOM and store them as seperate variables from the array that is returned using querySelectorAll.
var diceImages = document.querySelectorAll("img")
var diceOneImg = diceImages[0];
var diceTwoImg = diceImages[1];