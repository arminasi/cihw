// 8. Given an array of strings and numbers. Print the number of integers and 
// the number of strings in the array.

function numAndStr(arr) {
    let num = 0;
    let str = 0;
    arr.forEach(elem => {
        if(typeof elem === "number") {
            num = num + 1;
        } 
        else if(typeof elem === "string") {
            str = str + 1;
        }
    })
    return `Numbers ${num} Strings ${str}`
}

console.log(numAndStr([1, '10', 'hi', 2, 3]))