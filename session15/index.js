// Discussion Topic List:

// Arithmetic Operators
// Addition Operator (+)
// Subtraction Operator (-)
// Multiplication Operator (*)
// Division Operator (/)
// Assignment Operators

// Basic Assignment Operator (=)
// Addition Assignment Operator (+=)
// Subtraction Assignment Operator (-=)
// Multiple Operators and Parentheses
// Increment and Decrement

// Increment Operator (++)
// Decrement Operator (--)

// Type Coercion
// Comparison Operators
// Equality Operator (==)
// Inequality Operator (!=)
// Strict Equality Operator (===)
// Strict Inequality Operator (!==)
// Relational Operators
// Greater Than Operator (>)
// Greater Than or Equal To Operator (>=)
// Less Than Operator (<)
// Less Than or Equal To Operator (<=)

// Logical Operators
// Logical AND Operator (&&)
// Logical OR Operator (||)
// Logical NOT Operator (!)

//[SECTION] ARITHMETIC OPERATORS
let num1 = 10;
let num2 = 2;
let num3 = 3;

let sum = num1 + num2; //crtl + click to learn loc
console.log("SUM: " + sum);

let diff = num1 - num2;
console.log("DIFFERENCE: " + diff);

let product = num1 * num2;
console.log("PRODUCT: " + product);

let quotient = num1 / num2;
console.log("QUOTIENT: " + quotient);

let remainder = num1 %  num3;
console.log("REMAINDER: " + remainder);

// 2.Assignment Operators
//[SECTION] ASSIGNMENT OPERATORS
//asign: (=)
//let:initalize4df
let num4 = 20; //num4 is assigned the value of 20
let num5 = 8; //num5 is assigned the value of 8

// let sum = num4 + num4; -> old method

// num4= 20
num4 += num4; //num4 is updated to 40 (20 + 20). short method
console.log("ASSIGNMENT OPERATOR += : " + num4); //OUTPUT: 40

// num4 = 40
num4 += num5; //num4 is updated to 48 (40 + 8)
console.log("ASSIGNMENT OPERATOR += : " + num4); //OUTPUT: 48


//[SECTION] INCREMENTATION(++) AND DECREMENTATION(--) | LET AGE=10; AGE++(post:nasa dulo ++) -> AGE=11; AGE-- -> AGE=10
//POST-INCREMENTATION, PRE-INCREMENTATION, POST-DECREMENTATION, PRE-DECREMENTATION

//Pre
let days = 5;
console.log("ORIGINAL VALUE: " + days); //OUTPUT: 5

++days;
console.log("PRE-INCREMENTATION: " + days); //OUTPUT: 6

++days;
console.log("PRE-INCREMENTATION: " + days); //OUTPUT: 7

//Post
let months = 4;
console.log("ORIGINAL VALUE: " + months); //OUTPUT: 3

months++;
console.log("POST-INCREMENTATION1: " + months); //OUTPUT: 4

months++;
console.log("POST-INCREMENTATION2: " + months); //OUTPUT: 5


//Pre
let days2 = 5;
console.log("ORIGINAL VALUE: " + days2); //OUTPUT: 5

--days2;
console.log("PRE-DECREMENTATION: " + days2); //OUTPUT: 4

--days2;
console.log("PRE-DECREMENTATION: " + days2); //OUTPUT: 3    
//Post
let months2 = 4;
console.log("ORIGINAL VALUE: " + months2); //OUTPUT: 4

months2--
console.log("POST-DECREMENTATION1: " + months2); //OUTPUT: 3
months2--
console.log("POST-DECREMENTATION2: " + months2); //OUTPUT: 2

//crtl + T= para palit lahat


//[SECTION] COMPARISON OPERATORS

//Equality Operator (==): OOLEAN VALUE RETURN
let num6 = 10;
let num7 =  12;
let num8 = "10";

//EQUALITY OPERATOR (==)
let equality1 = num6 == num7; //false
console.log("EQUALITY OPERATOR (==) : " + equality1); //OUTPUT: false

let equality2 = num6 == num8; //true (type coercion occurs)
console.log("EQUALITY OPERATOR (==) : " + equality2); //outpur:true: LOSE TYPE 

//STRICT EQUALITY OPERATOR (===)
let strictEquality1 = num6 === num7; //false
console.log("STRICT EQUALITY OPERATOR (===) : " + strictEquality1); //OUTPUT: false

let strictEquality2 = num6 === num8; //false (no type coercion)
console.log("STRICT EQUALITY OPERATOR (===) : " + strictEquality2); //OUTPUT: false

//not equal (!=): kabaliftaran sagot kanina
let notEqual1 = num6 != num7; //true
console.log("notEqual : " + notEqual1); //OUTPUT: true


let notEqual2 = num6 != num8; //false (type coercion occurs)
console.log("notEqual : " + notEqual2); //OUTPUT: false

//[STRICTLY NOT EQUAL OPERATOR (!==)]
let strictlyNotEqual1 = num6 !== num7; //true
console.log("STRICTLY NOT EQUAL OPERATOR (!==) : " + strictlyNotEqual1); //OUTPUT: true

let strictlyNotEqual2 = num6 !== num8; //true (no type coercion)
console.log("STRICTLY NOT EQUAL OPERATOR (!==) : " + strictlyNotEqual2); //OUTPUT: true

//[SECTION] RELATIONAL OPERATORS
let num9 = 25;
let num10 = 15;

console.log("GT: ", num9 > num10); //concatination(+) : will make it as string, COMMA(,) : will make it as boolean
console.log("LT: ", num9 < num10);
console.log("GTE: ", num9 >= num10);
console.log("LTE: ", num9 <= num10);

//[SECTION] LOGICAL OPERATORS
let isLegalAge = true, isMarried = false, isVoter = true;

//Logical AND (&&): lahat values is true dapat para maging true
console.log("LOGICAL AND (&&) : ", isLegalAge && isMarried && isVoter); //OUTPUT: false

//Logical OR (||): kahit isa lang sa values is true, magiging true
console.log("LOGICAL OR (||) : ", isLegalAge || isMarried || isVoter); //OUTPUT: true

//Logical NOT (!): magbabaliktad ng value
console.log("LOGICAL NOT (!) : ", !isMarried); //OUTPUT: true

//[SECTION] Large Scale Data Types
//arrays: can store multiple values or elements. counter part ng python is list
//VALUES should of the same data type

let array1 = [10,20,30];
let names = ["Kelvin", "Cedric", "Johnley"];

console.log(names); 

let mixedArr = ["Kelvin", 3, true]; //bad pract:it brings ambiguity
console.log(mixedArr); //OUTPUT: ["Kelvin", 3, true]

//objects(disctionary in python): can store multiple key-value pairs. keys should be unique
//it consists a key/property and a paired values
let user = {
    name: "Kelvin", //use "," to seprate key-value pairs
    gradeLevel: 3,
    isEnrolled: true
};

console.log(user); //OUTPUT: {name: "Kelvin", gradeLevel: 3, isEnrolled: true}

//[SECTION] Alert vs. Prompt
alert("Hello world!"); 
console.log("Hello world!"); //not gopod pract kasi misunderstood ng user na may error sa code kaya mas maganda alert

let completeName = prompt("Enter your complete name: ");//may inpurt
console.log("Hello, " + completeName);

//Path operations
let input1 = parseInt(prompt("Enter num1: "));//use parseInt to convert the string input to an integer
let input2 = parseInt(prompt("Enter num2: "));

let sum3 = input1 + input2; //type coercion: string to number
console.log("SUM FROM PROMPT: " + sum3); //OUTPUT: SUM: 1020. if put in prompt _> lagay by default string
