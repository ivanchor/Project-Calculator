const add = (num1, num2) => {
    return num1 + num2
}

const subtract = (num1, num2) => {
    return num1 - num2
}

const divide = (num1, num2) => {
    return num1 / num2
}

const multiply = (num1, num2) => {
    return num1 * num2
}

const operate = (num1, num2, operator) => {
    switch (operator){
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;    
    }   
}

// Calculator Functionality

const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".display")
const numbers = document.querySelectorAll(".number")

function checkDisplay(){
    return isNaN(display.textContent)
}


operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if(!(number1 == null)){
            display.textContent = operator.textContent;
            op = operator.textContent;
            // console.log("Operator: " + op)
        }
    })
})



let number1 = null;
let number2 = null;
let op = null;

function displayNumber(number, digit){
    if(number===null){
        display.textContent = digit;
    }
    else{
        if (display.textContent.length < 7) {
            display.textContent += digit;
        }
    }
    return display.textContent;
}

numbers.forEach(number => {
    number.addEventListener('click', ()=> {
        if(checkDisplay()){
            display.textContent = '';
        }
        
        if(op == null && number1 == null){
            number1 = displayNumber(number1, number.textContent)
        }
        else{
            number2 = displayNumber(number2, number.textContent)
        }
        console.log("Number 1:" + number1)
        console.log("Number 2:" + number2)
        console.log(number.textContent) 


        // console.log(number.textContent);
    })
})

const clearButton = document.querySelector('.clear_button');
clearButton.addEventListener('click', () => {
    display.textContent = ''; // clear the display
    number1 = null;
    number2 = null;
    op = null;
});

const enterButton = document.querySelector('.enter_button');
enterButton.addEventListener('click', () => {
    // console.log("Number 1:" + number1)
    // console.log("Number 2:" + number2)
    // console.log("Operator: " + op)
    // console.log("Operation: " + operate(Number(number1), Number(number2), op))
    number1 = operate(Number(number1), Number(number2), op);
    number2 = null;
    op = null;
    display.textContent = number1.toString().slice(0, 7);;
    
})
