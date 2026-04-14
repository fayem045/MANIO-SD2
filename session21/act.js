//[SECTION] Pokemon
function Pokemon(name, level, health, mana){
    this.name = name;
    this.level = level;
    this.health = health * level;
    this.mana = mana;

    //create func property/constructor
    //tackle mana
    this.tackle = function(target){
    //put damage
    let damage = 20;
    console.log(`${this.name} use tackle attack!`);
    //call target(not use "this." calling the target)
    target.health -= damage;

    this.mana += 40;
    if(this.mana > 100){
        this.mana = 100;
         }
    console.log(`${this.name} mana: ${this.mana}`);

}

//heal potion
     this.useHealPotion = function(){
        let totalHealth = 100 * this.level;
        if(this.health < totalHealth){
            if((this.health + 150) >= totalHealth){
                this.health = totalHealth;
                console.log(`${this.name} HEALTH: ${this.health}`);
            }else{
                this.health += 150;
                console.log(`${this.name} HEALTH: ${this.health}`);
            }
        }else{
            console.log(`${this.name}'s health is full`);
        }
    }

    this.useSkill1 = function(target){
        if(this.name == "Pikachu"){
            if(this.mana < 50){
                console.log(`${this.name}'s mana is not enough! MANA: ${this.mana}`);
            }else{
            let damage = 150;
            console.log(`${this.name} used Thunderbolt!`);
            target.health -= damage;
            this.mana -= 50; //"this" when the attacker
            console.log(`${this.name} mana: ${this.mana}. ${target.name}. health: ${target.health}`);}
        }else if(this.name){
            if(this.mana < 50){
                console.log(`${this.name}'s mana is not enough! MANA: ${this.mana}`);
            }else{
            let damage = 150;
            console.log(`${this.name} used Flame Thrower!`);
            target.health -= damage;
            this.mana -= 50; //"this" when the attacker
            console.log(`${this.name} mana: ${this.mana}. ${target.name}. health: ${target.health}`);}
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
charmander.tackle(pikachu);
console.log(pikachu);

charmander.useSkill1(pikachu);
charmander.useSkill1(pikachu);
console.log(pikachu);


pikachu.useHealPotion();
pikachu.useHealPotion();
pikachu.useHealPotion();
console.log(pikachu);


charmander.tackle(pikachu);
charmander.tackle(pikachu);
charmander.tackle(pikachu);
charmander.tackle(pikachu);
console.log(charmander);



//CREATE FUNC CONSTRUCTOR USE HELP POSTION THAT WILL ADD 150 HEALTH IN POKEMON
//500 MAXIMUM HEALTH. lock lang sya 500.
//tackle= add 40 in mana
//100 max mana

// this.healthPotion = function(this){
//         if(this.name == "Pikachu"){
//             if(this.health <= 500){
//                 console.log(`${this.name}'s health in Maximum`);
//             }else if(this.health == 500){
//                 console.log("health is in Maximum!");
//             }else{
//             let health = 150;
//             console.log(`${this.name} used Health Potion!`);
//             this.health += health;
//             this.mana += 40; //"this" when the attacker
//             console.log(`${this.name} mana: ${this.mana}. health: ${this.health}`);}
//         }else if(this.name){
//             if(this.mana < 50){
//                 console.log(`${this.name}'s mana is not enough! MANA: ${this.mana}`);
//             }else{
//             let damage = 150;
//             console.log(`${this.name} used Flame Thrower!`);
//             target.health -= damage;
//             this.mana -= 50; //"this" when the attacker
//             console.log(`${this.name} mana: ${this.mana}. ${target.name}. health: ${target.health}`);}
//         }
//     }
// }


   

