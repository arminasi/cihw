//	Enter a number. Find the difference between its biggest and smallest digits.

const minMaxDiff = (container) => {
	let min = 9;
	let max = 0;
	let tmp = 0;
	while(container > 1) {
		tmp = container % 10;
		if(min > tmp) {
			min = tmp;
		}
		if(max < tmp) {
			max = tmp
		}
		container /= 10
	}
	return Math.trunc(max) - Math.trunc(min);
}

console.log(minMaxDiff(5))
console.log(minMaxDiff(152))
console.log(minMaxDiff(4593653))