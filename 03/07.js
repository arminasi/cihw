// Print the following number pattern:
      
// 1
// 12
// 123
// 1234
// 12345
// 1234
// 123
// 12
// 1

function range(n) {
    const r = n * 2 - 1;
    let str = "";
    for(let i = 1; i < r - 1; i++) {
        for(let j = 1; j < r - i; j++) {
            str += `${j}`;
        }
        str += "\n";
    }
    return str
}

console.log(range(4));