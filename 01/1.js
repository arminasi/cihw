//Given a number. Print “odd” if the number is odd and “even” if it’s even.

const isOdd = (n) => {
	return n % 2 === 0 ? "even" : "odd";
}

console.log(isOdd(123))
console.log(isOdd(35))
console.log(isOdd(70))