// exercise1.js

// Create an array named users
const users = ["John", "William", "David", "Jenny", "Hannah"];

// Print out users on the console as a string
console.log("User list: " + users.join(","));

// Print out the total number of users
console.log("There are " + users.length + " users on the list.");

// Swap the position of "John" and "Hannah"
const johnIndex = users.indexOf("John");
const hannahIndex = users.indexOf("Hannah");
[users[johnIndex], users[hannahIndex]] = [users[hannahIndex], users[johnIndex]];

// Print out users on the console after swapping
console.log("User list: " + users.join(","));

// Print out the total number of users after swapping
console.log("There are " + users.length + " users on the list.");

// Add a new user "Finn" to the end of the list
users.push("Finn");

// Print out users on the console after adding "Finn"
console.log("User list: " + users.join(","));

// Print out the total number of users after adding "Finn"
console.log("There are " + users.length + " users on the list.");
