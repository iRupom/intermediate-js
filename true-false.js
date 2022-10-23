/**
 * Falsy values:
 * false
 * NaN
 * "" (empty string)
 * null
 * undefined
 */

/**
 * Truethy values:
 * true
 * '0' - it is a string
 * ' ' - it is a string with only one whitespace character
 * {} - empty object
 * [] - empty string
 */

let flag = [];

if (flag) {
    console.log('Condition true');
} else {
    console.log('Condition false');
}