//4. Given a string of digits, output all the contiguous substrings of length n in that string.

function contiguousSubStr(str, n) {
    const arr = [];
    let tmp = "";
    for(let i = 0; i < str.length; i++) {
        for(let j = i; j < str.length; j++) {
            tmp += str[j];
            if(tmp.length === n) {
                arr.push(tmp);
            }
        }
        tmp = "";
    }
    return arr;
}

console.log(contiguousSubStr("495215", 3))
console.log(contiguousSubStr('abcdfghz', 7))