//		Percentage marks obtained by a student in three exams are to be entered to a
//		computer. An indication of Pass or Fail is given out after the three marks are entered.
//		The criteria for passing are as follows:
//		a. A student passes if all three examinations are passed.
//		b. Additionally a student may pass if only one subject is failed but the overall
//		average is greater than or equal to 50.
//		The pass mark for an individual subject is 40.

const passingCourse = (...args) => {
	const res = args.reduce((acc, elem) => acc += elem);
	return res / args.length >= 50 ? "Passed" : "Not passed";
}

console.log(passingCourse(65, 70, 60))
console.log(passingCourse(10, 85, 75))
console.log(passingCourse(35, 25, 40))
console.log(passingCourse(20, 40, 40))
