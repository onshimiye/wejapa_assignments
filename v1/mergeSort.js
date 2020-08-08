/*

MergeSort

*/

function mergeSort(arr) {

    let len = arr.length;

    if (len < 2) {
        return arr
    }

    let middle = Math.floor(len / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));

}


// Merges 2 sorted arrays
function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {

        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));

}

// Sample tests

console.log(`Testcase: [12, 3, 4, 5, 6, 7232, 42, -2] \nExpected output: [ -2, 3, 4, 5, 6, 12, 42, 7232 ] \nOutput: ${mergeSort([12, 3, 4, 5, 6, 7232, 42, -2])} \n`);

console.log(`Testcase: [] \nExpected output: [] \nOutput: ${mergeSort([])} \n`);