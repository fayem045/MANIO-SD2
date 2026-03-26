//3 = coco
//5 =melon
//15=coco melon


let input = parseInt(prompt("Please enter a number."));



for(let i = 1; i <= input; i++){
    if(i % 15 == 0){
        console.log("Count: " + i + " - COCO MELON");
        continue; //detect 15 pero continue lang
    }else if(i % 5 == 0){
        console.log("Count: " + i + " - MELON");
        continue;
    }else if(i % 3 == 0){
        console.log("Count: " + i + " - COCO");
        continue;
    }else{
        console.log("Count: " + i);
    }
}









//SCRATCH LOGIC
// for(let i = 1; i <= input; i++){
//     if(i % 15 == 0){
//     console.log("COUNT: " + i + "COCO MELON");
//     }else if(i % 5 == 0){
//     console.log("COUNT: " + i + "MELON");
//     } 
//     console.log("COUNT: " + input);
// }



// let input = parseInt(prompt("Please enter a number."));

// for(let i = 1; i <= input; i++){
//     if(input == 15 && input + 15 % 0){
//         console.log(i + "COCO MELON");
//         continue; //detect 15 pero continue lang
//     }else if(input == 5 && input + 5 % 0){
//         console.log(i + "MELON");
//         continue;
//     }else if(input == 3 && input + 3 % 0){
//         console.log(i + "COCO");
//         continue;
//     }else{
//         console.log("Count: " + i);
//     }
// }
