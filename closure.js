/**
 * If we return a function from a function, then initernal function make a closed environment with its parent scope varibale.
 * This is called closure.
 */

function stopWatch() {
    let count = 0;

    return function () {
        count++;
        return count;
    }
}

const clock1 = stopWatch();
const clock2 = stopWatch();

console.log(clock1());
console.log(clock1());
console.log(clock1());

console.log("");
console.log(clock2());
console.log(clock2());

console.log(clock1());