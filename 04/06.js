// 6. Implement the classic method for composing secret messages called a square code.
// Given an English text, output the encoded version of that text.
// First, the input is normalized: the spaces and punctuation are removed from the English
// text and the message is downcased. Then, the normalized characters are broken into
// rows. The plain text should be organized into a rectangle. The size of the rectangle (r x
// c) should be decided by the length of the message, such that c &gt;= r and c - r &lt;= 1,
// where c is the number of columns and r is the number of rows. The coded message is
// obtained by reading down the columns going left to right.
// 
//  Plain: If man was meant to stay on the ground, god would have given us roots.
//  
//  Ifmanwasmeanttostayonthegroundgodwouldhavegivenusroots
//  
//  Cipher:
//  ifmanwas
//  meanttos
//  tayonthe
//  groundgo
//  dwouldha
//  vegivenu
//  sroots

function squareCodeDec(str) {
    let Plain = "";
    let Cipher = "";
    let tmp = "";

    function squareCode() {

    }

    squareCode.Plain = function() {
        for(let char in str) {
            if(str[char] >= 'A' && str[char] <= 'Z' || str[char] >= 'a' && str[char] <= 'z') {
                Plain += str[char];
            }
        }
        return Plain;
    }

    squareCode.Cipher = function() {
        let flag = 0;
        let row = 1;
        let col = 1;

        function rowCount(len = Cipher.length) {
            while(row * col <= len) {
                row++;
                col++;
            };
            return row;
        }

        for(let char in str) {
            if(str[char] >= 'A' && str[char] <= 'Z' || str[char] >= 'a' && str[char] <= 'z') {
                if(str[char] >= "a" && str[char] <= "z") {
                    Cipher += str[char];
                } else {
                    Cipher += String.fromCharCode(str[char].charCodeAt(0) + 32);
                }
            }
        }
        for(let char in Cipher) {
            tmp += Cipher[char];
            flag++;
            if(flag === rowCount()) {
                tmp += "\n";
                flag = 0;
            }
        }
        return tmp;
    }

    return squareCode;
}

const res = squareCodeDec("If man was meant to stay on the ground, god would have given us roots.")

console.log(res.Plain())
console.log(res.Cipher())

