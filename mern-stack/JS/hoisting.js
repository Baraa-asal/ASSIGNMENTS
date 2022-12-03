// Example
// console.log(example);
// var example = "I'm the example!";
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";


//-------------------------------------------------------------------------------------//


//ONE:
// console.log(hello);
// var hello = 'world';

// ***** this is how js sees it: *****// var hello;

// console.log(hello);
// hello = "world";


//-------------------------------------------------------------------------------------//


//TWO:
// var needle = 'haystack';
// test();
// function test() {
//     var needle = 'magnet';
//     console.log(needle);
// }

// ***** this is how js sees it: *****

// var needle; //needle is declared (hoisted)
// function test() {
//     var needle;
//     needle = 'magnet';
//     console.log(needle);
// } //function is hoisted
// needle = "haystack";
// test();


//-------------------------------------------------------------------------------------//


//THREE:
// var brendan = 'super cool';
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// ***** this is how js sees it: *****

// var brendan;
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// brendan = 'super cool';
// console.log(brendan);


//-------------------------------------------------------------------------------------//



//FOUR:
// var food = 'chicken';
// console.log(food);
// eat();
// function eat() {
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

// ***** this is how js sees it: *****

// var food;
// function eat() {
//     var food;
//     food = 'half-chicken';
//     console.log(food);
//     food = 'gone'; //assignment sign (=) is an anchor, it stays in the same line!!
// }
// food = "chicken";
// console.log(food);
// eat();



//-------------------------------------------------------------------------------------//



//FIVE:
// mean();
// console.log(food);
// var mean = function () {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// ***** this is how js sees it: *****

// var mean; //we declared the variable, it is not assigned with the function YET
// mean(); //error, because not assigned YET.
// console.log(food); //food is not declared in this scope, it's only inside the function scope
// mean = function () {
//     var food;
//     food = "chicken";
//     console.log(food);
//     food = "fish";
//     console.log(food);
// }
// console.log(food);



//-------------------------------------------------------------------------------------//



//SIX:
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

// ***** this is how js sees it: *****

// var genre;
// function rewind() {
//     var genre;
//     genre = "rock";
//     console.log(genre);
//     genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// genre = "disco";
// rewind();
// console.log(genre);



//-------------------------------------------------------------------------------------//

//SEVEN:
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

// ***** this is how js sees it: *****

// var dojo; //var by default, even if you dont give type
// function learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// dojo = "san jose";
// console.log(dojo);
// learn();
// console.log(dojo);



//-------------------------------------------------------------------------------------//



//EIGHT:
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students) {
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if (dojo.students > 50) {
//         dojo.hiring = true;
//     }
//     else if (dojo.students <= 0) {
//         dojo = "closed for now";
//     }
//     return dojo;
// }

// ***** this is how js sees it: *****

// function makeDojo(name, students) {
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if (dojo.students > 50) {
//         dojo.hiring = true;
//     }
//     else if (dojo.students <= 0) {
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));





















