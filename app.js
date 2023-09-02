// let a = 0;
// let b = 0;
// let operator;
// let result = 0;

function operate(a, b, operator) {
    console.log(a, b, operator);
    
    switch (operator) {
      case "+":
            displayText.textContent = Number((Number(a)+Number(b)).toFixed(2));
            firstNumber = displayText.textContent;
        break;
      case "–": 
            displayText.textContent = Number((Number(a)-Number(b)).toFixed(2));
            firstNumber = displayText.textContent;       
        break;
      case "*":
            displayText.textContent = Number((Number(a)*Number(b)).toFixed(2));
            firstNumber = displayText.textContent;        
        break;
      case "/":
            if(Number(b)!=0){
                displayText.textContent = Number((Number(a)/Number(b)).toFixed(2));
                firstNumber = displayText.textContent;    
            }    
            else displayText.textContent = "You can't divide by 0 🙄";
        break;
      default:
        break;
    }
  }

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

let numbers = document.querySelectorAll(".numbers");
let operations = document.querySelectorAll(".operations");

let displayText = document.querySelector(".display");
let calculationHistory = document.querySelector(".calculation");

let deleteButton = document.querySelector(".delete");
let clearButton = document.querySelector(".clear");
let equalButton = document.querySelector(".equal-button");

let firstNumber = "blank";
let secondNumber = "blank";
let operation = "";

clearText();
deleteText();

numbers.forEach((number)=>{
    number.addEventListener("click", () => {
        displayText.textContent += number.textContent;
    });
});

equalButton.addEventListener("click", () => {
    if(firstNumber != "blank"){
        secondNumber = displayText.textContent;
        calculationHistory.textContent += displayText.textContent;
        operate(firstNumber, secondNumber, operation);
    }
});

operations.forEach((op)=>{
    op.addEventListener("click", () => {   
        if(firstNumber == "blank") firstNumber = displayText.textContent;
        else operate(firstNumber, displayText.textContent, operation);
        
        calculationHistory.textContent = displayText.textContent + op.textContent;
        displayText.textContent = "";
        operation = op.textContent;
    });
});

function clearText(){
    clearButton.addEventListener("click", () => {
        displayText.textContent = "";
        calculationHistory.textContent = "";
        firstNumber = "blank";
        secondNumber = "blank";
    });
}

function deleteText(){
    deleteButton.addEventListener("click", () =>{
        displayText.textContent = displayText.textContent.slice(0,-1);
    });
}