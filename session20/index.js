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
