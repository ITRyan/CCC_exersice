// exercise2.js

// Function to capitalize the first letter of a string
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Create an array fruits
const fruits = ["apple", "orange", "banana", "mango"];

// Print the original fruit list
console.log("Original fruit list: " + fruits.join(","));

// Capitalize all string elements in fruits using a loop
for (let i = 0; i < fruits.length; i++) {
  fruits[i] = capitalize(fruits[i]);
}

// Print the capitalized fruit list
console.log("Capitalized fruit list: " + fruits.join(","));

// Calculate the total number of characters in fruits
const totalCharacters = fruits.join("").length;

// Print the total number of characters
console.log(
  "There are " + totalCharacters + " characters used in the fruit list."
);
