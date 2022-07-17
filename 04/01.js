// 1. Given an array of integers, find the pair of adjacent elements 
// that has the largest product and return that product.

function getHigherAdjacentValue(arr) {
    let tmp = arr[0];
    for(let i = 0; i < arr.length - 1; i++) {
        const pair = arr[i] * arr[i + 1];
        if(pair > tmp) {
            tmp = pair;
        }
    }
    return tmp;
}

console.log(getHigherAdjacentValue([40, 60, 5, 15, 30, 80]))