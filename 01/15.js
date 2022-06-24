//	Enter a number. Reverse its first and last digits. Print the new number.

const revFirstAndLastNum = (n) => {
	let swapper;
	let arrStr = String(n).split("");
	swapper = arrStr[0];
	arrStr[0] = arrStr[arrStr.length - 1];
	arrStr[arrStr.length - 1] = swapper;
	return Number(arrStr.join(""))
}

console.log(revFirstAndLastNum(2))
console.log(revFirstAndLastNum(13))
console.log(revFirstAndLastNum(895796))
