//3. Convert a long phrase to its acronym.

function acronym(str) {
    return str.split(" ").map(item => item.slice(0, 1)).join("").toUpperCase();
}

console.log(acronym('Prisoner of War'))