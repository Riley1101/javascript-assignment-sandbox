// Assignment: Shopping Cart Simulation

// Importing the prompt-sync module for user input
var prompt = require("prompt-sync")();

// Displaying the prompt for options
console.log(
  "Enter option\n 1. Show Menu \n 2. Add Item to cart \n 3. Show Cart",
);

// Getting user input for options
let options = prompt();

// Displaying the user's selected option
console.log(options);
