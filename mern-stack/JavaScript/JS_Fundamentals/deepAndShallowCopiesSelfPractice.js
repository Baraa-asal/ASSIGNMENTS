
// in primitive:
// var x = 10;
// var y = x; //copy from x 
// y = 7;
// console.log(x)
// console.log(y)


// in objects:
x = {
    name: "Hello",
    nums: 2
}
y = x; //copy from x(you can't change on y)
//both of them are refering to the same memory address. The data inside them is the same, they are two pointers that point 
//to the same object so both of them can change it.
y.name = "dd"
console.log(x)
console.log(y)

// how to do deep copy: using spread
z = { ...x }
z.name = "World"
console.log(x)
console.log(z)