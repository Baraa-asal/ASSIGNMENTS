const pokemon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

console.log("-------------------------------------------------------------------");
console.log("An array of pokemon objects where the id is evenly divisible by 3\n: ");
const divByThree = pokemon.filter(p => p.id % 3 === 0);
console.log(divByThree);
console.log("\n");

console.log("-------------------------------------------------------------------");
console.log("An array of pokémon objects that are fire type: ");
const fireType = pokemon.filter(p => p.types == "fire"); //three equal signs here doesn't work
console.log(fireType);
console.log("\n");

console.log("-------------------------------------------------------------------");
console.log("An array of pokémon objects that have more than one type: ");
const moreThanOneType = pokemon.filter(p => p.types.length > 1);
console.log(moreThanOneType);
console.log("\n");

console.log("-------------------------------------------------------------------");
console.log("An array with just the names of the pokémon: ");
const namesOnly = pokemon.map(p => p.name);
console.log(namesOnly);
console.log("\n");

console.log("-------------------------------------------------------------------");
console.log("An array with just the names of pokémon with an id greater than 99: ");
const idMoreThan99OnlyNames = pokemon.filter(p => p.id > 99).map(p => p.name);
console.log(idMoreThan99OnlyNames);
console.log("\n");

console.log("-------------------------------------------------------------------");
console.log("An array with just the names of the pokémon whose only type is poison: ");
const poisonTypeOnlyNames = pokemon.filter(p => p.types == "poison").map(p => p.name)
console.log(poisonTypeOnlyNames);
console.log("\n");

console.log("-------------------------------------------------------------------");
console.log("An array containing just the first type of all the pokémon whose second type is flying: ");
const secondTypeIsFlying = pokemon.filter(p => p.types[1] == "flying").map(p => p.types[0]);
console.log(secondTypeIsFlying);
console.log("\n");

console.log("-------------------------------------------------------------------");
console.log("a count of the number of pokémon that are normal type: ");
const countOfNormalType = pokemon.filter(p => p.types == "normal").length;
console.log(countOfNormalType);
console.log("\n");



//**********************************************
//**********************************************
//Below are extra practice we decided to do me and Maram because we enjoyed the assignment:: ^_^
//1- An array containing just the id of all names that start with the letter M:
//2- An array containing just the name of all ids that their unit is 2, ex: 72, 12, 122
//**********************************************
//**********************************************

console.log("-------------------------------------------------------------------");
console.log("Extra Practice 1: An array containing just the id of all names that start with the letter M: ");
const idOfNamesStartWithM = pokemon.filter(p => p.name[0] == "M").map(p => p.id);
// Another way using built-in function startsWith():
// const idOfNamesStartWithM = pokemon.filter(p => p.name.startsWith("M").map(p => p.id);
console.log(idOfNamesStartWithM);
console.log("\n");


console.log("-------------------------------------------------------------------");
console.log("Extra Practice 2: An array containing just the name of all ids that their unit is 2, ex: 72, 12, 122: ");
const idUnitIs2 = pokemon.filter(p => p.id % 10 === 2).map(p => p.name);
console.log(idUnitIs2);
console.log("\n");
