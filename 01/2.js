//Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.

const isDividable = (n, m) => {
	return n > m ? n % m === 0 ? m % n === 0 ? 0 : 1 : 0 : 1;
}

console.log(isDividable(3, 14))
console.log(isDividable(18, 2))
console.log(isDividable(7, 21))