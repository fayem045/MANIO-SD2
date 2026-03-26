// console.log("Hello World!");

//[SECTION] JS FUNCTIONS
// Performs specific tasks and eliminated repeatetive codes
// SYNTAX: function funcname(parameter){//code block}

console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");

//gun:func; bala:parameter; trigger to andar: invocation(func calling)
//beter if funcname is ung ginagawa nya
function  sayHello(){
    console.log("Hello, San Fernando City, Pampanga!");
}

//Invocation/Invoke or Function Calling
sayHello(); //reusable
sayHello();
sayHello();
sayHello();
sayHello();
sayHello();

//func to stop too much alert

function showAlert(){
    alert("Hello, User!")
}
showAlert(); //(): to invoce func. if no (): code palkita

//MINI CALCULATOR
let num1 = 0, num2 = 0;
function startCalc(){
    let userInput =  parseInt(prompt("Please select an action: \n[1] Input Numbers\n[2] Sum\n[3] Difference\n[4] Product\n [5]Quotient\n [6]Reset"));

    switch (userInput){
        case 1:
            enterNumber();
            break;
        case 2:
            sum();
            break;
        case 3:
            difference();
            break;
        case 4:
            product();
            break;
        case 5:
            quotient();
            break;
        case 6:
            reset();
            break;
    }
}

function enterNumber(){
    let inputNum1 = parseInt(prompt("enter first number."));
    let inputNum2 = parseInt(prompt("enter second number."));
    //pasok sa global var
    num1 = inputNum1;
    num2 = inputNum2;

}
//should put validation unless may num
function sum(){
    if(num1 == 0 || num2 == 0){
        alert("Pleaser enter num1 or num2.")
        }else{
    let sum = num1 + num2;
    alert(`The sum of ${num1} and ${num2} is ${sum}.`); //``(backtiks): for one line concatinate with template literal; $(tem,plate literal): instead of concatinate + 
        }
    }
    


function difference(){
    if(num1 == 0 || num2 == 0){
        alert("Pleaser enter num1 or num2.")
        }else{
    let difference = num1 - num2;
    alert(`The difference of ${num1} and ${num2} is ${difference}.`); //``(backtiks): for one line concatinate with template literal; $(tem,plate literal): instead of concatinate + 
        }
    }
    


function product(){
    if(num1 == 0 || num2 == 0){
        alert("Pleaser enter num1 or num2.")
        }else{
    let product = num1 * num2;
    alert(`The product of ${num1} and ${num2} is ${product}.`); //``(backtiks): for one line concatinate with template literal; $(tem,plate literal): instead of concatinate + 
        }
    }
    


function quotient(){
    if(num1 == 0 || num2 == 0){
        alert("Pleaser enter num1 or num2.")
        }else{
    let quotient = num1 / num2;
    alert(`The quotient of ${num1} and ${num2} is ${quotient}.`); //``(backtiks): for one line concatinate with template literal; $(tem,plate literal): instead of concatinate + 
        }
    }
    


function reset(){
    num1 = 0;
    num2 = 0;
}