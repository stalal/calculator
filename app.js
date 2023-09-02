let a = 0;
let b = 0;
let operator;
let result = 0;

function operate(a,b,operator){

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
let displayText = document.querySelector(".display");
let deleteButton = document.querySelector(".delete");
let clearButton = document.querySelector(".clear");

let firstNumber = 0;
let secondNumber = 0;
let operation = "";

clearText();
deleteText();

numbers.forEach((number)=>{
    number.addEventListener("click", () => {
        displayText.textContent += number.textContent;
    });
});

function clearText(){
    clearButton.addEventListener("click", () => {
        displayText.textContent = " ";
    });
}

function deleteText(){
    deleteButton.addEventListener("click", () =>{
        displayText.textContent = displayText.textContent.slice(0,-1);
    });
}