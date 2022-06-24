//Given five numbers as input. Calculate and print the average of the numbers(without using arrays).

function average(a, b, c, d, e) {
	return (a + b + c + d + e) / arguments.length;
}

console.log(average(45, -12, 0, 3, -15))
console.log(average(7, 52, -23, 9, -81))