let numbers = document.querySelectorAll(".numbers"); // Select all elements with class "numbers"
let operations = document.querySelectorAll(".operations"); // Select all elements with class "operations"

let displayText = document.querySelector(".display"); // Select the element with class "display"
let calculationHistory = document.querySelector(".calculation"); // Select the element with class "calculation"

let deleteButton = document.querySelector(".delete"); // Select the element with class "delete"
let clearButton = document.querySelector(".clear"); // Select the element with class "clear"
let equalButton = document.querySelector(".equal-button"); // Select the element with class "equal-button"

let firstNumber = "blank"; // Initialize firstNumber variable with "blank"
let secondNumber = "blank"; // Initialize secondNumber variable with "blank"
let operation = ""; // Initialize operation variable as an empty string

clearText(); // Call the clearText function
deleteText(); // Call the deleteText function

// Add event listener to each number element
numbers.forEach((number)=>{
    number.addEventListener("click", () => {
        displayText.textContent += number.textContent; // Append the clicked number to the display text
    });
});

// Add event listener to the equal button
equalButton.addEventListener("click", () => {
    if(firstNumber != "blank"){
        secondNumber = displayText.textContent; // Assign the display text to the secondNumber variable
        calculationHistory.textContent += displayText.textContent; // Append the display text to the calculation history
        operate(firstNumber, secondNumber, operation); // Call the operate function with the stored values
    }
});

// Add event listener to each operation element
operations.forEach((op)=>{
    op.addEventListener("click", () => {   
        if(firstNumber == "blank") firstNumber = displayText.textContent; // If firstNumber is blank, assign the display text to it
        else operate(firstNumber, displayText.textContent, operation); // Otherwise, call the operate function with the stored values
        
        calculationHistory.textContent = displayText.textContent + op.textContent; // Update the calculation history with the display text and the clicked operation
        displayText.textContent = ""; // Clear the display text
        operation = op.textContent; // Assign the clicked operation to the operation variable
    });
});

// Function to clear the display text and calculation history
function clearText(){
    clearButton.addEventListener("click", () => {
        displayText.textContent = ""; // Clear the display text
        calculationHistory.textContent = ""; // Clear the calculation history
        firstNumber = "blank"; // Reset the firstNumber variable
        secondNumber = "blank"; // Reset the secondNumber variable
    });
}

// Function to delete the last character from the display text
function deleteText(){
    deleteButton.addEventListener("click", () =>{
        displayText.textContent = displayText.textContent.slice(0,-1); // Remove the last character from the display text
    });
}

// Function to perform the mathematical operation
function operate(a, b, operator) {
    
    switch (operator) {
      case "+":
            displayText.textContent = Number((Number(a)+Number(b)).toFixed(2)); // Perform addition and display the result
            firstNumber = displayText.textContent; // Update the firstNumber variable with the result
        break;
      case "–": 
            displayText.textContent = Number((Number(a)-Number(b)).toFixed(2)); // Perform subtraction and display the result
            firstNumber = displayText.textContent; // Update the firstNumber variable with the result       
        break;
      case "*":
            displayText.textContent = Number((Number(a)*Number(b)).toFixed(2)); // Perform multiplication and display the result
            firstNumber = displayText.textContent; // Update the firstNumber variable with the result        
        break;
      case "/":
            if(Number(b)!=0){
                displayText.textContent = Number((Number(a)/Number(b)).toFixed(2)); // Perform division and display the result
                firstNumber = displayText.textContent; // Update the firstNumber variable with the result    
            }    
            else displayText.textContent = "You can't divide by 0 🙄"; // Display an error message if dividing by zero
        break;
      default:
        break;
    }
}

// Additional helper functions for mathematical operations (not used in the code)
function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}