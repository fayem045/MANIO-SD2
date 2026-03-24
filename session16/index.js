console.log("Hello world");

//[SECTION] Selection Control Structure
//1. if-else else-if statemen(diamond structure in): daanan isa-isa condition muna

let age = 10; //dapat true here para matrigger to print

if(age >= 18){
    console.log("You are eligible for driver's licens.");
}

let city = "cebu";

if(city == "manila"){
    console.log("Welcome to the capital region.");
}else{
    console.log("The selected area is not in Manila");
}

if(age >= 18 && city == "cebu"){
    console.log("You can register for the event.");
}else if(age <= 18){
    console.log("You are not eligible for the event.");
}else{
    console.log("All criteria not met");
}

//mini-process tpo appreciate if-else
    // let role = prompt("Please ente your role.").toLocaleLowerCase();//prompt: small screen accept user input.   .toLocaleLowerCase();:para convert magmatch lahat
// if (role == "admin"){
//     alert("Welcome to UA portal, Administrator!")
// }else if(role == "teacher"){
//     alert("Welcome to Portal, Faculty!")
// }else if(role == "student"){
//     alert("Welcome to Portal, student!")
//     }else{
//         alert("Enter Valid role!")
//     }
//2. Switch-case Statement: SPEED. no logiuc, deretso value
let day = 7;

switch (day){
    case 1:
        console.log("Monday");
        break; //always put break means done na ung case
    case 2:
        console.log("Tuesaday");
    case 3:
        console.log("Wednesday");
        break; //always put break means done na ung case
    case 4:
        console.log("Thursaday");
    case 5:
        console.log("Friday");
        break; //always put break means done na ung case
    default://catch when no case met
        console.log("Please enter between 1-5 only.");
        break;
}

//con=vert if-ele in switchase
let useRole = prompt("Please ente your role.").toLocaleLowerCase();
switch(useRole){
    case "admin":
    alert("Welcome to UA portal, Administrator!");
    break;
    case "faculty":
    alert("Welcome to Portal, Faculty!");
    break;
    case "student":
    alert("Welcome to Portal, student!");
    break;
    default:
    alert("Please enter valid Role.");
    break;
}