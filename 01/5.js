//Given a positive integer. Bring the last digit of the number to the beginning. Print the new
//number. If the last digit of the inserted number is 0, number remains the same.

const bringLast = (n) => {
	if(n < 10) {
		return n;
	}
	const last = n % 10;
	if(last === 0) {
		return n	
	}
	const strOfNum = String(n);
	return Number(last + strOfNum.split("").splice(0, strOfNum.length - 1).join(""))
}

console.log(bringLast(367))
console.log(bringLast(1002))
console.log(bringLast(250))
console.log(bringLast(8))
