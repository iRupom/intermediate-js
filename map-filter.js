// filter of array. It returns an array of elements that pass the condition
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// find method find the fist element that pass the condition

let array = numbers.find(number => number > 4);
console.log(array);

const arr = numbers.filter(number => number < 0);
console.log(arr); 



// map of array

const square = function (number) {
    return number * number;
}

let result = numbers.map(element => element * element);

let result2 = numbers.map(function (number) {
    return number * number;
});

let result3 = numbers.map(square);


console.log(result);
console.log(result2);
console.log(result3);
