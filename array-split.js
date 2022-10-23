const nums = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const parts = nums.slice(1, 5);

// const removed = nums.splice(1, 3);

// we can also add elements at time of removal

const removed = nums.splice(2, 2, 100, 200, 300, 400);
const together = nums.join(" ");

// console.log(typeof together);
console.log(together);
console.log(parts);
console.log(removed);
console.log(nums);