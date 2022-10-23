/**
 * number of ways to get undefined values
 */
/**
 * null must be filled explicitly
 * otherwise it will not assigned.
 */

// Case: 1
let names;
console.log(names);

// Case: 2
function add(num1, num2) {
    console.log(num1,num2);
}

console.log(add(1,2));

// Case: 3

function add(num1, num2) {
    console.log(num1,num2);
}

add(1);

// Case: 4
const person = {
    name: 'Rakib Talukder',
    phone: 12345
};

console.log(person.home);

// Case: 5
let fun = undefined;
console.log(fun);

// Case: 6
const nums = [1, 2, 4];
console.log(nums[11]);