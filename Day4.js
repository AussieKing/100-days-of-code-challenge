//! EVENT LISTENER

var count = 0;
//  Select increment and decrement button elements
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

// Updates count on page
function setCounterText() {
  countEl.textContent = count;
}

//! Attaching event listener to increment button element
incrementEl.addEventListener("click", function() {
  count++;
  setCounterText();
});

//! Attaching an event listener to decrement button element
decrementEl.addEventListener("click", function() {
  // Action will fire if count is greater than  0
  if (count > 0) {
    count--;
    setCounterText();
  }
});



//! PREVENT DEFAULT 

var fruitsCountEl = document.querySelector("#fruits-count");
var calculateEl = document.querySelector("#calculate");

// Assume a fixed price per fruit, for simplicity. For instance, $0.5 per fruit.
var pricePerFruit = 0.5;

function displayTotalCost(event) {
  //! Prevent default action : if you take out this line, the page will refresh when you click the button
  event.preventDefault();

  // Calculate total cost based on the fixed fruit price and user input
  var fruitsCount = parseFloat(fruitsCountEl.value);
  var totalCost = (fruitsCount * pricePerFruit).toFixed(2);
  // Update HTML with total cost
  document.querySelector("#total-cost").textContent = "Total cost: $" + totalCost;
}

// Add listener to calculate element
calculateEl.addEventListener("click", displayTotalCost);



//? Bonus : PROPAGATION
// this will stop the event from bubbling up to the parent element
.stopPropagation();   


//! KEYBOARD EVENTS
// When the user types the name of a fruit, and when they press a key, it displays the fruit's name and its color.

function keydownAction(event) {   //! when pressing a key on the keyboard, an action will be fired
    var fruitKey = event.key.toLowerCase();
    var fruitData = getFruitData(fruitKey);
    
    document.querySelector("#fruitName").textContent = fruitData.name;
    document.querySelector("#fruitColor").textContent = fruitData.color;
}

function getFruitData(key) {
    var fruits = {
        'a': {name: 'Apple', color: 'Red'},  // when pressing the 'a' key on the keyboard, 'Apple' and 'Red' will be displayed
        'b': {name: 'Banana', color: 'Yellow'},  // when pressing the 'b' key on the keyboard, 'Banana' and 'Yellow' will be displayed
        'c': {name: 'Cherry', color: 'Red'},  // when pressing the 'c' key on the keyboard, 'Cherry' and 'Red' will be displayed
    };

    return fruits[key] || {name: 'Unknown', color: 'Unknown'};  // if we press a key not defined in our paramater above, 'Unknown' will be displayed
}

document.addEventListener("keydown", keydownAction); // IMPORTANT : we are adding the event listener to the document, not the button


//! BUBBLING
//! &&
//! EVENT DELEGATION
//? Event Bubbling:
//When an event triggers on a DOM element, it moves upwards to its ancestors.

//? Event Delegation:
//A single event listener on a parent handles events for its children. It leverages event bubbling for efficiency.
//In essence, bubbling is a natural DOM event behavior, while delegation is a technique we use to benefit from that behavior.
