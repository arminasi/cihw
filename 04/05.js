//5. Given a word, compute the scrabble score for the given word. To calculate scrabble
//score use the following table of scores:

const scr = ["aeioulnrst", "dg", "bcmp", "fhvwy", "k", "jx", "qz"];

function scrabblesScore(str, data) {
    let res = 0;
    for(let i = 0; i < data.length; i++) {
        for(let j = 0; j < str.length; j++) {
            if(data[i].includes(str[j])) {
                res += data.indexOf(data[i]) + 1
            }
        }
    }
    return res
}

console.log(scrabblesScore("another", scr))
console.log(scrabblesScore("quick", scr))