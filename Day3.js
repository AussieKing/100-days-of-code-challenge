//! WEB APIs

//! WINDOW OBJECT
// `window` is the execution context and global object for that context's JavaScript
// `document` contains the DOM, initialized by parsing HTML
// `screen` describes the physical display's full screen
// The most basic relationship among the three is that each browser tab has its own window, and a window has window.document and window.screen properties. 
// The browser tab's window is the global context, so document and screen refer to window.document and window.screen. 

// Logs window object
console.log(window);

// Logs reference to the document in the window object
console.log(window.document);

// Logs root element of document.
console.log(document.documentElement);

// Returns head element of current document
console.log(document.head);



//! TRAVERSING THE DOM
// 🐛🐛🐛🐛  DEBUG  🐛🐛🐛🐛

//?Expected Behavior 
// The article title has a font size of 50px
// The text in the headline "Welcome to World News" is white.
//? Actual Behavior
// The article title is smaller than 50px 
// The text in the headline "Welcome to World News" is blue. 


//CODE: (see day3.html for the HTML code)
// Access element using id
var articlesDiv = document.getElementById('articles');
var headerDiv = document.getElementById('header');

// Change style by accessing style object's properties
//## 💡 Hints : How would you use parent-child relationships to access the elements you want to style? 
articlesDiv.children[2].style.fontSize = '50px'; 
headerDiv.style.color = 'white';  //

//ANSWER:
articlesDiv.children[0].style.fontSize = '50px';
headerDiv.children[0].style.color = 'white';


//! GETTING ELEMENTS BY ID  //! SETTING ATTRIBUTES
var site1El = document.querySelector(".site1");
var site2El = document.querySelector(".site2");
var site3El = document.querySelector(".site3");

//! Store all h4 elements in a variable
var siteTitles = document.querySelectorAll("h4");

site1El.children[0].textContent = "Site 1";
site1El.children[1].setAttribute("href", "https://google.com");
site1El.children[1].children[0].setAttribute("src", "assets/images/image_1.jpg");
site1El.children[1].children[0].setAttribute("alt", "man working");
site1El.children[1].children[0].setAttribute("style", "padding:10px;");

site2El.children[0].textContent = "Site 2";
site2El.children[1].setAttribute("href", "https://twitter.com");
site2El.children[1].children[0].setAttribute("src", "assets/images/image_2.jpg");
site2El.children[1].children[0].setAttribute("alt", "group brainstorm");
site2El.children[1].children[0].setAttribute("style", "padding:10px;");

site3El.children[0].textContent = "Site 3";
site3El.children[1].setAttribute("href", "https://instagram.com");
site3El.children[1].children[0].setAttribute("src", "assets/images/image_3.jpg");
site3El.children[1].children[0].setAttribute("alt", "women working");
site3El.children[1].children[0].setAttribute("style", "padding:10px;");

// Write Your Answer here!
//! Loop through all h4 elements to add styling 
for (var i = 0; i < siteTitles.length; i++) {
    siteTitles[i].setAttribute("style", "color: blue; font-weight: bolder; font-size: 30px; padding-left:10px; margin: 0");
  }

//! CREATE ELEMENTS
var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var dishEl = document.createElement("div");
var nameEl = document.createElement("div");
var ingredientsEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");

h1El.textContent = "Favorite Dish";
dishEl.textContent = "Let's talk about pasta 🍝.";
nameEl.textContent = "It's Spaghetti Carbonara.";
ingredientsEl.textContent = "Main Ingredients:";

//! APPEND ELEMENTS

//! Add text for list items
li1.textContent = "Spaghetti";
li2.textContent = "Eggs";
li3.textContent = "Pancetta";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(dishEl);
infoEl.appendChild(nameEl);
body.appendChild(ingredientsEl);
ingredientsEl.appendChild(listEl);

//! Append list items to ordered list element 
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
dishEl.setAttribute("style", "font-size:25px; text-align:center;");
ingredientsEl.setAttribute("style", "font-size:20px;");

//! Add styling to list element
listEl.setAttribute("style", "background:#333333; padding:20px;");
//! Add styling to list items
li1.setAttribute("style", " color:white; background: #66BB6A; padding: 5px; margin-left: 35px;");
li2.setAttribute("style", " color:white; background: #81C784; padding: 5px; margin-left: 35px;");
li3.setAttribute("style", " color:white; background: #A5D6A7; padding: 5px; margin-left: 35px;");


//? Bonus:
// append() vs appendChild()
// appendChild() is a method on a DOM element, while append() is a method on the Document object.

parentElement.appendChild(childElement); // appendChild() only accepts a single element
parentElement.append(childElement1, childElement2, 'Some String'); // append() accepts multiple arguments

// In general, append offers more flexibility due to its ability to handle multiple nodes and strings directly. 
// However, for broader compatibility, especially with older browsers, developers might still find themselves using appendChild.
 

//! TIMER INTERVALS

var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

var message =
  'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
var words = message.split(' ');

// Timer that counts down from 5
function countdown() {
  var timeLeft = 5;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}

countdown();

