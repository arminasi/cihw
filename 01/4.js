//Given number n (positive integer). Print the value of n + nn + nnn(not multiplication).
const valueOfMultiply = (n) => {
	let sumOfNumStr = String("");
	let tmp = 0;
	let iterationCount = 3;
	while(iterationCount-- > 0) {
		tmp += n;
		sumOfNumStr += tmp;
	}
	return Number(sumOfNumStr);
}

console.log(valueOfMultiply(3))
console.log(valueOfMultiply(17))
console.log(valueOfMultiply(100))