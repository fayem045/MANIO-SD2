// console.log("Goodness Cracious");

//[SECTION] ARRAY
//ARRAY: also a storage like variable but can handle multiple values/elements. they are mutatable(dagdag/bawas) or called Mutator
//BEST PRACTICE: The best practice values/elements stored in an array should be of the same data type.

let pokemon =["Pikachu", "Charmander", "Squirtle"]; //index: start in 0; element: start 1; protoptypes: are methods for the array
console.log(pokemon);

console.log(pokemon[0]);
console.log(pokemon[2]);

console.log(`My favorite Pokemon is ${pokemon[0]}.`);

console.log(`My favorite Pokemon is ${pokemon[0].toLocaleUpperCase()}.`);

//Get the Length of an array
console.log(pokemon.length);

//Accessing an index that is not existing will result -> undefined
console.log(pokemon[5]);

//ARRAY MUTATION
// Modifying Array Elements

pokemon[3]= "Bulbasaur";
console.log(pokemon);
console.log(pokemon.length);
//edited charmander
pokemon[1] = "Charmeleon";
console.log(pokemon);
console.log(pokemon.length);

pokemon[10] = "Mew";
console.log(pokemon);
console.log(pokemon.length);

//Add an Element on the tail of Artray without knowing the actual index number.
//Use length to add dynamically
console.log(pokemon.length);
pokemon[pokemon.length] = "snorlax";

console.log(pokemon);
console.log(pokemon.length);
//ACCESS THE LAST ELEMENT on the Array
console.log(pokemon[pokemon.length - 1]);

//[SECTION] MODERN ARRAY MUTATION METHODS
let fruits = ["Apple", "Banana", "Melon"];


//push() -> add an element on the tail of an array
console.log("Original Array: " + fruits);
fruits.push("Strawberry"); //invocation of the function
console.log("Push Method: " + fruits);
//pop() _> remove an element on the tail of an array
console.log("Original Array: " + fruits);
fruits.pop(); //no nee argument because we delete
fruits.pop(); //melon is removed
console.log("Pop Method: " + fruits);

//FRONT
//unshift -> adds an elmenbt on the head part of the array. BEGINING
console.log("Original Array: " + fruits);
fruits.unshift("strawberry");
console.log("Unshift Method: " + fruits);
fruits.unshift("Grapes", "melon", "Kiwi");
console.log("Unshift Method(3 elements infront): " + fruits);
//shift(): removes an element on the head party of an array
fruits.shift();
fruits.shift();
console.log("Shift Method(remove head element): " + fruits);

//sort() -> sort an elemenmnt in an array. LETTERS AND NUMBERS
fruits.sort();
console.log(fruits);

//REVERS() -> sorts in revers manner
fruits.reverse();
console.log(fruits);

//SPECIFIC INDEX
//splice() -> adds/remove an element in specified index
fruits.splice(1,2, "Blue berry");// from index 1, tanggal 2
console.log(fruits);

fruits.splice(1,1)//delete lang completely
console.log(fruits);

//forEach -> read each element inside the array
fruits.forEach((x) =>{ //x any variable, doon lagay after basahin
    console.log(x);
}) // =>(arrow function): no need to put func, it is func