// console.log("Hello World");

//[SECTION] Repetition Control Structures
// while loop

/* 
SYNTAX;
while(condition){ //if may error sa una = error agad
    //code black
    //iteration: determine if need umulit
}

*/

let count = 0;

while(count < 5){ //kasma 0-4
    console.log("DO LOOP: " + count);
    count ++; //iteration
}

/* 
>>1st Iteration
let count = 0;

while(0 < 5){ 
    console.log("DO LOOP: " + count);
    count ++;
}
    RESULT -> DO LOOP:0

>>2nd Iteration
let count = 1;

while(1 < 5){ 
    console.log("DO LOOP: " + 1);
    count ++;
}
    RESULT -> DO LOOP:1

>>3rd Iteration
let count = 2;

while(2 < 5){ 
    console.log("DO LOOP: " + 2);
    count ++;
}
    RESULT -> DO LOOP:2   

    
>>4th Iteration
let count = 3;

while(2 < 5){ 
    console.log("DO LOOP: " + 3);
    count ++;
}
    RESULT -> DO LOOP:3


>>5th Iteration
let count = 4;

while(2 < 5){ 
    console.log("DO LOOP: " + 4);
    count ++;
}
    RESULT -> DO LOOP:4

    
>>6th Iteration
let count = 5;

while(5 < 5){ //stop na kasi false na. cant go sa CLG
    console.log("DO LOOP: " + 2);
    count ++;
}
    RESULT -> DO LOOP:2

*/

//2. do-while loop
/*
SYNTAX:

do{ //output isang beses bago mag-error
    //code block
    //iteration
}while(condition)

*/

let score = 0;

do{
    console.log("DO-WHILE LOOP: " + score);
    score++;
}while(score <! 5)//error na fter kaya cut na sa 1st iteration

//3. For loop - complete na sa one line palang

/* 
SYNTAX:

for(initialization; condition; iterator parameter)
//code block

*/

for(let i = 0; i < 5; i++){//i: not glopbal scope
    console.log("FOR LOOP: " + i);
}//global scope var: hindi nakakulong sa any braces(access anywhere)

for(let i = 0; i <  10; i++){
    if(i % 3 == 0){
        console.log("COUNT: " + i + "- Divisible by 3.");
    }else{
        console.log("COUNT: " + i);
    }
}

// CONTINUE - break

for (let count = 0; count < 20; count ++){ // till 17 lang kasi kapag 18, break na
    if(count == 18){
        break;
    }
    console.log("COUNT: " + count);
}

for (let count = 0; count < 20; count ++){ 
    if(count == 15){
        console.log("HELLO IT'S ME: " + count);
        continue; // skip ung 15, detect 15 pero continue lang
    }
    console.log("COUNT: " + count);
}

let isRunning = true;
let accountLocked = 0;
let isLoggedIn = false;
let password = "hello123";

while(isRunning){
    if (accountLocked != 3){
    let input = prompt("Please Enter Your Password.");
        if (input != password){
            console.log("Incorrect pasword. Chance: ", 2 - accountLocked);
        accountLocked++;//continue loop while tama and less than 3
        }else{//if correct
        isLoggedIn = true;
        alert("Welcome, User!")
        isRunning = false;
    }
    }else{
        alert("Account is Locked! Please Contact Admin.")
        isRunning = false;
    }
}

//FORLOOP NA MAY INPUT
let input = parseInt(prompt("Please eneter a number."));

for(let i = 0; i <= input; i++){
    console.log(i);
}

