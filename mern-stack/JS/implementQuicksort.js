let unsortedArray = [0, 2, 5, 8, 1, 3, 4, 7, 6, 90, 43, 21, 30, 99];

function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }
    let pivot = array[0];
    let left = [];
    let right = [];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    return quicksort(left).concat(pivot, quicksort(right));
}

console.log(quicksort(unsortedArray));