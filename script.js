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
        case operator == "+":
            add(num1, num2);
            break;
        case operator == "-":
            subtract(num1, num2);
            break;
        case operator == "/":
            divide(num1, num2);
            break;
        case operator == "*":
            multiply(num1, num2);
            break;    
    }   
}

// Calculator Functionality

const display = document.querySelector(".display")
const numbers = document.querySelectorAll(".number")

let number1 = null;
let number2 = null;
let op = null;

numbers.forEach(number => {
    number.addEventListener('click', ()=> {
        if(number1===null){
            display.textContent = number.textContent;
            number1 = display.textContent;
        }
        else{
            if (display.textContent.length < 7) {
            display.textContent += number.textContent;
            number1 = display.textContent;
            }
        }

        
        // console.log(number.textContent);
    })
})

const clearButton = document.querySelector('.clear_button');
clearButton.addEventListener('click', () => {
    display.textContent = ''; // clear the display
});