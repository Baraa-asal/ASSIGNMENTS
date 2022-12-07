const points = [40, 100, 1, 5, 25, 10];
points.map(amin=>console.log(amin*4));

//map is a method that takes a function that applies an operation on ALL of the items of the array.
//filter is a method that takes a function that applies an operation on ALL of items on the array UNDER some condition.

evenValues = points.filter(amin => amin % 2 == 0) //amin here represents each element in the array named: points
console.log(evenValues)