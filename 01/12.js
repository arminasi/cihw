//	 Input three numbers a, b, c respectively, where a is a non zero number and write a
//	 program to solve quadratic equations: . (Hint: use Math.pow or Math.sqrt).

const quadraticEquation = (a, b, c) => {
	let d = 0;
	let x1 = 0;
	let x2 = 0;
	if(a === 0) {
		return "Enter valid constant";
	}
	d = Math.pow(b, 2) - 4 * (a * c);
	if(d < 0) {
		return "Solution does not exist"
	} else if(d === 0) {
		return `Solution is ${x1 = (-b + d) / (2 * a)}`;
	} else {
		d = Math.sqrt(d)
		x2 = (-b + d) / (2 * a);
		x1 = (-b - d) / (2 * a);
		return `Solution is ${x1} and ${x2}`
	}
}

console.log(quadraticEquation(1, 2, 1))
console.log(quadraticEquation(0, 4, -5))
console.log(quadraticEquation(3, -8, 12))
console.log(quadraticEquation(5, -13, 6))