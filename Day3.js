//! WEB APIs

//! WINDOW OBJECT
// `window` is the execution context and global object for that context's JavaScript
// `document` contains the DOM, initialized by parsing HTML
// `screen` describes the physical display's full screen
// The most basic relationship among the three is that each browser tab has its own window, and a window has window.document and window.screen properties. The browser tab's window is the global context, so document and screen refer to window.document and window.screen. 

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


//! GETTING ELEMENTS BY ID


//! SETTING ATTRIBUTES


//! CREATE ELEMENTS


//! APPENDING ELEMENTS


// Bonus:
// append() vs appendChild()


//! TIMER INTERVALS