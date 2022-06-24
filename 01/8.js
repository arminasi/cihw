//	Given an age, figure out whether someone is a baby(1 months - 12 months), toddler (1
//	year - 2 years), child(3 years - 12 years ), teenager(13 years - 17 years) or adult(18
//	years and more ). Also check that age in months is between 1 and 12.

const figureByAge = (n, m) => {
	if(m === "months" && n <= 12) {
		return "baby";
	} else if(m === "years" && n) {
		if(n > 0 && n < 3) {
			return "toddler";
		} else if(n > 2 && n < 13) {
			return "child";
		} else if(n > 12 && n < 18) {
			return "teenager";
		} else {
			return "adult"
		}
	}
	return;
}

console.log(figureByAge(8, "months"))
console.log(figureByAge(45, "years"))
console.log(figureByAge(3, "years"))