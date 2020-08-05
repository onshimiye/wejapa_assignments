/*
Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.

Examples
    arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

    arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

    arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

Notes
    Notice that num is also included in the returned array.

*/

function arrayOfMultiples(num, length) {
    let arr = [];

    for (let i = 0; i < length; i++) {
        arr[i] = num * (i + 1);
    }

    return arr;
}

// Sample tests

console.log(`Testcase: 7, 5 \nExpected output: [7, 14, 21, 28, 35] \nOutput: ${arrayOfMultiples(7, 5)} \n`);

console.log(`Testcase: 12, 10 \nExpected output: [12, 24, 36, 48, 60, 72, 84, 96, 108, 120] \nOutput: ${arrayOfMultiples(12, 10)} \n`);

console.log(`Testcase: 17, 6 \nExpected output: [17, 34, 51, 68, 85, 102] \nOutput: ${arrayOfMultiples(17, 6)} \n`);