//! CONDITIONAL STATEMENTS
// If-else

let fruit = "apple";
let isRipe = true;
let isInSeason = false;

if (isRipe && isInSeason) {
    console.log(`Enjoy a delicious ${fruit}! 🍎✅`);
} else if (isRipe) {
    console.log(`The ${fruit} is ripe but not in season. 🍎❌`);
} else {
    console.log(`Wait for the ${fruit} to ripen. 🍎⏳`);
}

// Switch
let frutta = "mela";
let eMatura = true;
let inStagione = false;
let message;

// Use `switch` to set a message based on the fruit type
switch (frutta) {
    case "apple":
        message = "Enjoy a delicious apple! 🍎";
        break;
    case "banana":
        message = "Enjoy a tasty banana! 🍌";
        break;
    case "cherry":
        message = "Cherries are delightful! 🍒";
        break;
    default:
        message = "Enjoy your fruit! 🍉";
}

// Use the conditional to modify the message based on ripeness and seasonality
if (eMatura && inStagione) {
    console.log(message + " ✅");
} else if (eMatura) {
    console.log(message + ", but it's not in season. ❌");
} else {
    console.log(`Wait for the ${fruit} to ripen. ⏳`);
}

//! LOOPS
let fruits = [
    {name: "apple", isRipe: true, isInSeason: false},
    {name: "banana", isRipe: true, isInSeason: true},
    {name: "cherry", isRipe: false, isInSeason: false},
    {name: "grape", isRipe: true, isInSeason: true}
];

fruits.forEach(fruit => {  // forEach used to loop through the array of fruits
    let message;

    switch (fruit.name) {
        case "apple":
            message = "Apple! 🍎";
            break;
        case "banana":
            message = "Banana! 🍌";
            break;
        case "cherry":
            message = "Cherry! 🍒";
            break;
        case "grape":
            message = "Grape! 🍇";
            break;
        default:
            message = "Unknown fruit! 🍉";
    }

    if (fruit.isRipe && fruit.isInSeason) {
        console.log(message + " - Ready to eat! ✅");
    } else if (fruit.isRipe) {
        console.log(message + " - Ripe, but not in season. ❌");
    } else {
        console.log(message + ` - Wait for it to ripen. ⏳`);
    }
});

// EXAMPLE of a basic for loop (we use a for-loop to execute code more than once)

for (let i = 0; i < 5; i++) {    // <- this is the for-loop
    console.log("This is how many fruits I've checked so far: " + i + ".");
}
let fruits = ["Apples", "Bananas", "Cherries", "Grapes"];  // For-loops are used to iterate over arrays

for (let i = 0; i < fruits.length; i++) { // Use the array's length to determine how many times to loop

    console.log("I want to eat some " + fruits[i] + ".");
}


//! FUNCTIONS
// Function declaration

// checkSweetness using function declaration
function checkSweetness(fruitSweetness, expectedSweetness) {
    if (fruitSweetness === expectedSweetness) {
      console.log('The fruit has the perfect sweetness!');
    } else if (fruitSweetness == expectedSweetness) {
      console.log('The fruit sweetness is close, but might differ in quality.');
    } else {
      console.log('The fruit doesn’t have the expected sweetness.');
    }
    return;
  }
  
  // Logs "The fruit has the perfect sweetness!"
  checkSweetness(10, 10);
  
  // Logs "The fruit sweetness is close, but might differ in quality."
  checkSweetness('10', 10);
  
  // checkSweetnessVersionTwo using function expression 
  var checkSweetnessVersionTwo = function(fruitSweetness, expectedSweetness) {
    if (fruitSweetness === expectedSweetness) {
      console.log('The fruit has the perfect sweetness!');
    } else if (fruitSweetness == expectedSweetness) {
      console.log('The fruit sweetness is close, but might differ in quality.');
    } else {
      console.log('The fruit doesn’t have the expected sweetness.');
    }
    return;
  };
  
  // Logs "The fruit doesn’t have the expected sweetness."
  checkSweetnessVersionTwo(10, 15);
  

//! HOISTING
// Hoisting is the process of moving function declarations to the top of the file before any code is executed.

// var declaration
console.log(fruitName); // undefined 
var fruitName = "Apple";
console.log(fruitName); // Apple

// let declaration
// Accessing fruitType before its declaration will throw a ReferenceError
console.log(fruitType); // ReferenceError
let fruitType = "Citrus";

// function declaration
fruitGreeting(); // "Hello, I'm a Banana!"
function fruitGreeting() {
    console.log("Hello, I'm a Banana!");
}

// function expression
describeFruit(); // TypeError: describeFruit is not a function
var describeFruit = function() {
    console.log("Oranges are juicy and sweet!");
}


//! SCOPE
// Global scope
var globalFruit = "Apple"; // globally scoped variable using var

function checkFruit() {
    console.log(globalFruit); // Apple, because globalFruit is accessible here
}

checkFruit();

// Local (function) scope
function fruitFunction() {
    var localFruit = "Banana"; // locally scoped variable
    console.log(localFruit);  // Banana
}

fruitFunction();
console.log(localFruit);  // Error: localFruit is not defined outside of fruitFunction

// Block (Lexical) scope
if (true) {
    let blockScopedFruit = "Cherry";  // block-scoped variable
    console.log(blockScopedFruit);   // Cherry
}

console.log(blockScopedFruit);  // Error: blockScopedFruit is not defined outside of the if block
