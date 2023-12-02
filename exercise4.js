// Arrow function to add 7 to a number
const add7 = (number) => number + 7;

// Arrow function to multiply two numbers
const multiply = (a, b) => a * b;

// Arrow function to check office hours
const checkOfficeHour = (hour, isWeekend) => {
  if (hour > 10 && hour < 18 && !isWeekend) {
    console.log('The office is opened.');
  } else {
    console.log('The office is closed.');
  }
};

// Test the arrow functions with console.log
console.log('Result of add7(5):', add7(5)); // Should print: 12
console.log('Result of multiply(3, 4):', multiply(3, 4)); // Should print: 12

// Testing the checkOfficeHour arrow function
let hour = 9, isWeekend = true;
checkOfficeHour(hour, isWeekend); // Should print: The office is closed.
