//Given two variables, which are the angles of a triangle. Find the third angle of the
//triangle. (Sum of the angles of a triangle equals 180 degrees).

const thirdAngle = (a, b) => {
	return 180 - (a + b);
}

console.log(thirdAngle(45, 90))
console.log(thirdAngle(30, 30))
console.log(thirdAngle(75, 25))