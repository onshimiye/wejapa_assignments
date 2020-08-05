/*
Create a function which concatenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.

Examples
jazzify(["G", "F", "C"]) ➞ ["G7", "F7", "C7"]

jazzify(["Dm", "G", "E", "A"]) ➞ ["Dm7", "G7", "E7", "A7"]

jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]

jazzify([]) ➞ []

*/

function jazzify(arr) {

    for (let i = 0; i < arr.length; i++) {
        arr[i].toString();
        if (arr[i][arr[i].length - 1] != '7') {
            arr[i] = arr[i] + '7';
        }
    }
    return arr;
}
// Sample tests

console.log(`Testcase: ["G", "F", "C"] \nExpected output: ["G7", "F7", "C7"] \nOutput: ${jazzify(["G", "F", "C"])} \n`);

console.log(`Testcase: ["Dm", "G", "E", "A"] \nExpected output: ["Dm7", "G7", "E7", "A7"] \nOutput: ${jazzify(["Dm", "G", "E", "A"])} \n`);

console.log(`Testcase: ["F7", "E7", "A7", "Ab7", "Gm7", "C7"] \nExpected output: ["F7", "E7", "A7", "Ab7", "Gm7", "C7"] \nOutput: ${jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"])} \n`);

console.log(`Testcase: [] \nExpected output: [] \nOutput: ${jazzify([])} \n`);