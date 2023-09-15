//! METHODS

var tropicalFruits = ["Mango", "Pineapple", "Papaya", "Guava", "Passionfruit"];
var berries = [
  "Strawberry",
  "Blueberry",
  "Raspberry",
  "Blackberry",
  "Gooseberry",
];
var fruit = "banana";

// It's done when the string "Durian" is added as the first element of the `tropicalFruits` array and no elements are removed.
tropicalFruits.unshift("Durian"); // unshift adds to the beginning of the array
console.log(tropicalFruits);

// It's done when "Gooseberry" is removed from the `berries` array.
berries.pop(); // pop method removes the last element in the array
console.log(berries);

// It's done when the arrays `tropicalFruits` and `berries` are joined to form a new array named `fruitBasket`.
// The arrays `tropicalFruits` and `berries` should not be altered.
var fruitBasket = tropicalFruits.concat(berries); // concat method joins tropicalFruits and berries arrays and returns a new array

console.log(berries);
console.log(tropicalFruits);
console.log(fruitBasket); // the fruitBasket and berry arrays are unchanged

// It's done when the string "banana" is converted into all capital letters and the new string is stored in a variable.
var newFruit = fruit.toUpperCase(); // toUpperCase method makes all the letters in the string "banana" capital letters
console.log(newFruit);
console.log(fruit); // the original string is unchanged

//! OBJECTS
// It's done when the fruitOrder object has three properties: fruit's name, quantity, and a Boolean indicating if the fruit is ripe.
var fruitOrder = {
  fruit: "apple",
  quantity: 5,
  isRipe: true,
};

// It's done when the fruit name and quantity are logged to the console
console.log(fruitOrder);

// It's done when, if the fruit is ripe, the message "Ready for consumption" logs.
if (fruitOrder.isRipe) {
  console.log(
    "Ready for consumption: " +
      fruitOrder.fruit +  // Note that in dot notation, the name of the object is followed by the key
      " in quantity of " +
      fruitOrder.quantity +
      "."
    );

// It's done when, if the fruit is not ripe, the message "Still ripening" logs.
} else {
  console.log(
    "Still ripening: " +
      fruitOrder["fruit"] +   // Note that in bracket notation, the key is inside brackets and surrounded by quotes
      " in quantity of " +
      fruitOrder["quantity"] +
      "."
  );
}

// Bonus: How can you convert an object into an array using `Object.values()`?
var fruitProperties = Object.values(fruitOrder); // Object.values() method returns an array of a given object's own enumerable property values


//! .THIS OBJECT

//? What does 'this' refer to?
console.log(this);   // This refers to the window

//? What does 'this' refer to?
function fruitThis() {   // This refers to the window object
   console.log("Inside this function, this is " + this); 
}

//? What will this log? 
var apple = {   // This refers to the apple object. 
   ageInDays: 5,
   ageInTwoWeeks: function() {
       console.log(this.ageInDays + 10); // Will console log 15
   }
};

//? What will this log?
var fruitBasket = {  // This refers to the fruitBasket object. 
  name: "Tropical Delight",
  contents: {
    initialFruits: 100,
    fruitAfterWeek: function() {
      console.log(this.initialFruits + 15)  // Will log 115
    }
   }   
};

// Call the function fruitThis to check results
fruitThis();

// Call the object methods to check results
apple.ageInTwoWeeks();
fruitBasket.contents.fruitAfterWeek();
