//1. Given an array of numbers. Find the index of the second maximum element.

function secMaxNum(arr) {
    const [...sorted] = arr;
    sorted.sort((a, b) => a - b);
    return arr.indexOf(sorted[sorted.length - 2])
}

console.log(secMaxNum([-60, 2, 43, -18, 5, -19, 36, 7, 56 ]))