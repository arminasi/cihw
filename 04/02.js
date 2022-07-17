// 2. Given an array of integers. All numbers are unique. Find the count of missing numbers
// between minimum and maximum elements to make integers sequence.

function arrOfUnannounced(arr) {
    const unannounced = [];
    let min = Infinity;
    let max = -Infinity;
    arr.forEach(item => {
        if(item < min) min = item;
        if(item > max) max = item;
    })
    
    for(let i = min; i < max; i++) {
        if(!arr.includes(i)) {
            unannounced.push(i)
        }
    }
    return unannounced
}

console.log(arrOfUnannounced([16, 14, 5, 1, 9, 8, 7, 15]))