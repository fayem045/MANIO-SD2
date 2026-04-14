// console.log("Gracious Afternoon!");

//[SECTION] Javascript Objects
//Imitates real world description and real-world objects

let arr = [1,2,3];//best pract in array: all in same data type

let obj ={ //it's okay different data type in object
    name: "Carlo",
    age: 22
}

console.log(typeof arr);//child or object
console.log(typeof obj);// first developed in oop

let person={
    completeName: "Juan Dela Cruz",
    age: 25,
    height: 160,
    weight: 85, //keypair= property + values(info)
    contactNumber: [1234,4567],
    address: { //obj
        houseNo: 1,
        brgy: "Del Pilar",
        city: "CSFP",
    }
}
//contactno and brgy
console.log(person.contactNumber[1]);
console.log(person.address.brgy); //parang pumnapasok a folder, but use  dot notation

console.log(person);
//Dot notation: to access values inside an onj property

console.log(person.completeName);//access "person."+ property(completeName)

console.log(`Hi, my name is ${person.completeName} and I am ${person.age} years old!`);

console.log(person[`completeName`]); //dot notation is better than this tho

//chaneg name using DOT NOTATION
person.completeName = "John Doe";
console.log(person);

//Adding inside the object
person.email = "jdoe@mail.com";
console.log(person);

//Class(MOre advance. how construct object property, from scratch cause above are shortcut) and Objects
//to add properties in a class use "this" keyword
function Animal(name, breed, color, kind){ //Capitalized the first letter in class
    //construtors: they build the class(dog)
    this.name = name;
    this.kind = kind;
    this.breed = breed;
    this.color = color;
    this.makeSound = function(){ //function constructor
        if(this.kind == "dog"){
        console.log("Woof! Woof!");
        }else if(this.kind == "cat"){
            console.log("Meoowww!");
        }else{
            console.log("Cannot provide sound for the animal");
        }
    } 
}
//copy from blueprint class: Instance -> copy or duplicate of a function class use "new" and put argument

let dog = new Animal("Bruno", "Aspin", "Brown", "dog");

console.log(dog);
console.log(dog.name);
dog.makeSound();

let cat = new Animal("Luna", "Puspin", "Black", "cat");
console.log(cat.name);
cat.makeSound();
console.log(cat);

let trex = new Animal("Rex", "Dino", "Green", "Dinosaur");
trex.makeSound();

//Dot notation.: Obj; index[]: array


//[SECTION] Pokemon
function Pokemon(name, level, health, mana){
    this.name = name;
    this.level = level;
    this.health = health * level;
    this.mana = mana;

    //create func property/constructor
    this.tackle =function(target){
        //put damage
        let damage = 20;
        console.log(`${this.name} use tackle attack!`);
        //call target(not use "this." calling the target)
        target.health -= damage; //mas accurate
    }
    this.useskill1 = function(target){
        if(this.name == "Pikachu"){
            if(this.mana < 50){
                console.log(`${this.name}'s mana is not enough! Mana: ${this.mana}`);
            }else{
            let damage = 150;
            console.log(` ${this.name} use Thunderbolt!`);
            target.health -=damage;
            this.name -= 50; //"this" when the attacker
            console.log(`${this.name} mana: ${this.mana}. ${target.name} health:${target.health}`);
            }
        }else if(this.name == "Charmander"){
            let damage = 150;
            console.log(` ${this.name} use Flame Thrower!`);
            target.health -=damage;
            this.name -= 50; //"this" when the attacker
            console.log(`${this.name} mana: ${this.mana}. ${target.name} health:${target.health}`);
        }
    }
}

let pikachu =new Pokemon("Pikachu", 5, 100, 100);
console.log(pikachu);

let charmander = new Pokemon("Charmander", 5, 100, 100);
console.log(charmander);


pikachu.tackle(charmander);
pikachu.tackle(charmander);
pikachu.tackle(charmander);

console.log(charmander);

charmander.tackle(pikachu);
console.log(pikachu);

charmander.useskill1(pikachu);
charmander.useskill1(pikachu);
charmander.useskill1(pikachu);


//CREATE FUNC CONSTRUCTOR USE HELP POSTION THAT WILL ADD 150 HEALKTH IN POKEMON
//500 MAXIMUM HEALTH. lock lang sya 500.
//tackle= add 40 in mana
//100 max mana