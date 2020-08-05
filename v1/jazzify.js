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