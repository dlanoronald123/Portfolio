// Initialize stack
let stack = [];

// Get references to elements
const pushButton = document.querySelector("#pushButton");
const emptyButton = document.querySelector("#emptyButton");
const peekButton = document.querySelector("#peekButton");
const input = document.querySelector("#input");
const stackDisplay = document.querySelectorAll(".stack-item");

// Add event listeners for buttons
pushButton.addEventListener("click", pushItem);
emptyButton.addEventListener("click", isEmpty);
peekButton.addEventListener("click", peek);

// Function to push item to the stack
function pushItem() {
  if (!input.value) {
    alert("Please enter a value!");
    return;
  }

  if (stack.length === 5) {
    alert("Stack was already full!");
    return;
  }

  // Add item to the stack
  stack.push(input.value);

  // Display the stack
  displayStack();

  // Clear the input
  input.value = "";
}

// Function to check if stack is empty
function isEmpty() {
  if (stack.length === 0) {
    alert("Yes, Stack is empty");
  } else {
    alert("No, Stack is not empty");
  }
}

// Function to return the top item from the stack
function peek() {
  if (stack.length === 0) {
    alert("Operation not allowed!");
    return;
  }

  alert("Top Value is: " + stack[stack.length - 1]);
}

// Function to display the stack
function displayStack() {
  // Clear the stack display
  for (let i = 0; i < stackDisplay.length; i++) {
    stackDisplay[i].innerHTML = "";
  }

  // Display the updated stack
  for (let i = 0; i < stack.length; i++) {
    stackDisplay[stackDisplay.length - 1 - i].innerHTML = stack[i];
  }
}
