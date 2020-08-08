/*

QuickSort

*/

function quickSort(arr, left = 0, right = arr.length - 1) {
    let len = arr.length;

    if (len > 1) {
        let index = partition(arr, left, right);
        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }
        if (index < right) {
            quickSort(arr, index, right);
        }
    }

    return arr;

}

function partition(arr, left, right) {
    let middle = Math.floor((right + left) / 2);
    let pivot = arr[middle];
    let i = left;
    let j = right;

    while (i <= j) {

        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }

    return i;

}

// Sample tests

console.log(`Testcase: [12, 3, 4, 5, 6, 7232, 42, -2] \nExpected output: [ -2, 3, 4, 5, 6, 12, 42, 7232 ] \nOutput: ${quickSort([12, 3, 4, 5, 6, 7232, 42, -2])} \n`);

console.log(`Testcase: [] \nExpected output: [] \nOutput: ${quickSort([])} \n`);