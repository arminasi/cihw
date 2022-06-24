//	Given three numbers. Sort them by the ascending order.

const sortThreeNum = (a, b, c) => {
	if(a < b && b < c) {
		return [a, b, c]
	} else if(a < c && c < b) {
		return [a, c, b]
	} else if(b < a && a < c) {
		return [b, a, c];
	} else if(b < c && b < a) {
		return [b, c, a]
	} else if(c < a && c < b) {
		return [c, a, b];
	} else {
		return [c, b, a];
	}
}

console.log(sortThreeNum(45, 26, 78))
console.log(sortThreeNum(-23, -456, 0))