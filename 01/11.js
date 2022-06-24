//	Find the sign of product of three numbers without multiplication operator. Display the
//	specified sign.

const signOfProd = (...numbers) => {
	let flag = 0;
	for(let i = 0; i < numbers.length; i++) {
		if(numbers[i] === 0) {
			return "unsigned"
		}
		numbers[i] < 0 ? ++flag : flag;
	}
	return flag % 2 === 0 ? "+" : "-"
}

console.log(signOfProd(-14, 5, 0));
console.log(signOfProd(-8, 9, -6));
console.log(signOfProd(4, 9, -2));