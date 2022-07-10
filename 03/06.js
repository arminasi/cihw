//6. Given an array of numbers. Print frequency of each unique number. 
//(Frequency is the count of particular element divided by the count of all elements)

function frequency(arrOfNum) {
    const newObj = {};
    const encountered = arrOfNum.reduce((acc, elem) => {
        if(acc[elem]) {
            acc[elem] += 1;
        } else {
            acc[elem] = 1;
        }
        return acc
    }, {})
    for(num in encountered) {
        newObj[num] = encountered[num] / arrOfNum.length
    }
    return newObj;
}

console.log(frequency([1, 1, 2, 2, 3]))
console.log(frequency([4, 4]))
console.log(frequency([1, 2, 3]))