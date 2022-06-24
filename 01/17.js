//	Write a program which will compute the area of a rectangular or a triangle after
//	prompting the user to type the name of the figure name. Also check that entered
//	numbers are positive.
//	For the triangle entered numbers are height and and base.

const calcSquare = (name, a, b) => {
	if(name === "triangle") {
		if(a === 0 || b === 0) {
			return "Please enter only positives";
		}
		return `Square of the ${name} is ${(a * b) / 2}`
	} else if(name === "rectangle") {
		return `Square of the ${name} is ${a * b}`
	}
}

console.log(calcSquare("triangle", 6, 7))
console.log(calcSquare("rectangle", 8, 5))
console.log(calcSquare("triangle", 0, 5))