// Function to get the last letter of a string using a for loop
const lastLetter = (str) => {
    if (str.length === 0) {
      return null; // Return null for an empty string
    }
    // Start the loop from the end of the string and find the first non-space character
    for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] !== ' ') {
        return str[i];
      }
    }
    return null; // Return null if the string consists of only spaces
  };
  
  // Function to capitalize the first letter of a string using a for loop
  const capitalize = (str) => {
    if (str.length === 0) {
      return str; // Return the empty string as is
    }
    // Convert the first letter to uppercase using a loop and concatenate the rest of the string in lowercase
    let result = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
      result += str[i].toLowerCase();
    }
    return result;
  };
  
  // Test the functions with console.log
  console.log('Result of lastLetter("abcd"): ', lastLetter("abcd")); // Should print: d
  
  console.log('Result of capitalize("hello"): ', capitalize("hello")); // Should print: Hello
  console.log('Result of capitalize("WORLD"): ', capitalize("WORLD")); // Should print: World
  console.log('Result of capitalize("eXaMpLe"): ', capitalize("eXaMpLe")); // Should print: Example
  console.log('Result of capitalize(""): ', capitalize("")); // Should print an empty string
  