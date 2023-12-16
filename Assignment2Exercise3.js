// exercise3.js

const JS_NOTES_TITLE = "JavaScript Notes";
const JS_NOTES = [
  "Use let or const to declare a variable, never use var.",
  "Use strict equality check ===.",
  "Use arrow function.",
];

// Function to create a dynamic note list in HTML
function createNoteList() {
  const notesContainer = document.getElementById("notes-container");

  // Create title element
  const titleElement = document.createElement("h2");
  titleElement.textContent = JS_NOTES_TITLE;

  // Create unordered list
  const ulElement = document.createElement("ul");

  // Populate the list with JavaScript notes
  JS_NOTES.forEach((note) => {
    const liElement = document.createElement("li");
    liElement.textContent = note;
    ulElement.appendChild(liElement);
  });

  // Append title and list to the container
  notesContainer.appendChild(titleElement);
  notesContainer.appendChild(ulElement);
}

// Call the function when the DOM is loaded
document.addEventListener("DOMContentLoaded", createNoteList);
