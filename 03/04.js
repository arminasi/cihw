//4. Write a program to print X star pattern series using loop.

function xStar(n) {
    let str = "";
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= n; j++) {
            if(!((j === n - i + 1) || j === i)) {
                str += " ";
            } else {
                str += "*";
            }
        }
        str += "\n";
    }
    return str
}

console.log(xStar(10));
