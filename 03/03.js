//3. Write a program to check the validity of password input by users.
//Validation:

// At least 1 letter between [a-z] and 1 letter between [A-Z].
// At least 1 number between [0-9].
// At least 1 character from [$#@].
// Minimum length 6 characters.
// Maximum length 16 characters.

function passwordValidation(input) {
    let flagOfSC = 0;
    let flagOfNum = 0;
    let flagOfCharUp = 0;
    let flagOfCharLow = 0;
    if(input.length > 6 && input.length < 16) {
        for(let i = 0; i < input.length; i++) {
            if(input[i] === ("#" || "$" || "@")) {
                flagOfSC = flagOfSC + 1;
            } else if(+input[i]) {
                flagOfNum++;
            } else if(input[i] >= "A" && input[i] <= "Z") {
                flagOfCharUp = flagOfCharUp + 1;
            } else if(input[i] >= "a" && input[i] <= "z") {
                flagOfCharLow = flagOfCharLow + 1;
            }
        }
    } else return false;
    if(flagOfCharLow && flagOfCharUp && flagOfNum && flagOfSC) {
        return true;
    } else return false
}

console.log(passwordValidation("12asdf"))
console.log(passwordValidation("Aaza1234566#"))