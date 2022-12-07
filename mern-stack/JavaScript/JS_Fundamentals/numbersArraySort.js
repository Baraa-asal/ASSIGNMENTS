const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort())
x = points.sort(function(a,b){return a-b}); //compare function
//a-b will sort it ascending, b-a descending
console.log(x)