// Insert a digit and a number. Check whether the digits contains in the number or not.

const isContain = (n, container) => {
	let tmp = 0;
	let flag = 0;
	while(container > 1) {
		tmp = container % 10;
		Math.trunc(tmp) === n ? flag++ : flag;
		container /= 10
	}
	return flag > 0 ? "yes" : "no";
}

console.log(isContain(3, 2463))
