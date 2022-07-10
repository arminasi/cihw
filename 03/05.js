// 5. Given a string. Split it into words around the spaces and print them in an array.
// Word can be anything which is string․ If there is a sequence of spaces,
// the result will be empty strings.

function splitWords(str, char) {
    const splitted = [];
    const strCpy = str + char;
    let tmp = "";
    if(strCpy[strCpy.length - 1] !== char) {
        strCpy[strCpy.length - 1] += char;
    }
    for(let i = 0; i < strCpy.length; i++) {
        if(strCpy[i] === char) {
            i++;
            splitted.push(tmp);
            tmp = "";
        }
        tmp += strCpy[i];
    }
    return splitted;
}

console.log(splitWords("   46778 + !", " "))