// console.log("Hello Console!");

//[SECTION] Functions with Parameters
/* 
SYNTAX:

function funcName(params1, params2,..){
//code blocks
}
*/

function greeting(){
    let userInput = prompt("Please Enter your Name:" )// prompt inside func is not good practice
    console.log("Hello, " + userInput);
}
//greeting(); -> sample basic funstion(no parameter)

//FUNC with parameter
//name -> is our Parameter
// Parameters acts as a variable or storage for a specific function.
function sayHello(name){//name use inside the local. FUNTIONS ARE REUSABLE(edit lang content as it is code)
    console.log("Hello from function with parameter, " + name);
}

//sayHello(Argument) -> is to be passed in the function parameter.
sayHello("John Doe")//dapat with arguement: John Doe

//Multiple Parameters
function completeName(firstName, middleName, lastName){
    console.log(`Hello, ${firstName} ${middleName} ${lastName}!`);//1:1 argument 
}

completeName("Juan", "Dela", "Cruz"); //"Juan", "Dela", "Cruz": 1:2:3
completeName("Juan", "Dela", "Cruz", "Test"); // d alalbas si test kasi alang panlalagyan 
completeName("Juan", "Dela"); //Juan Dela undefined!  

//Function and return statement
//return: will hold a value to be passed outside the function. Nagiging global likew pag lagay sa labas ng function
function print(){
    console.log("Hello World!");
    return "Hello world";
}
print();

//exmple:but not proper way to return a function]
let sum = function(num1, num2){//variable function
    let total = num1 + num2;
    console.log("TOTAL: " + total);
    return total;
}

// sum(10,15);
let result = sum(40,45); // if var ung gunc= need pasok var uli bago print
console.log(result);

// if (sum >= 30){
//     console.log("Passed!");
// }else{
//     console.log("Failed!");
// }

function checkRemarks(score){
    if(score >= 75){
        console.log("Congrats, you passed!");
    }else{
        console.log("Better luck next time!");
    }
}

let registration(name, age){
    if(age <= 17){
        console.log("Sorry, you cannot register.");
    }else{
        console.log(`${name} please proceed to the next step. `);
        return age;
    }
}