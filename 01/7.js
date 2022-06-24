//Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.

const multipleBy = (n) => {
	if(n % 3 === 0 && n % 5 === 0 && n % 7 === 0) {
		return `${n} is a multiple of 3, 5 and 7`;
	} else if(n % 5 === 0 && n % 7 === 0) {
		return `${n} is a multiple of 5 and 7`;
	} else if(n % 3 === 0 && n % 7 === 0) {
		return `${n} is a multiple of 3 and 7`;
	} else if(n % 3 === 0){
		return `${n} is a multiple of 3`;
	} else {
		return 	`${n} is not a multiple 3, 5 or 7`; 
	}
}

console.log(multipleBy(21))
console.log(multipleBy(35))
console.log(multipleBy(13))
console.log(multipleBy(420))
console.log(multipleBy(24))