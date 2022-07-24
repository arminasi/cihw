const grid1 = [
  [".", ".", ".", "1", "4", ".", ".", "2", "."],
  [".", ".", "6", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", "1", ".", ".", ".", ".", ".", "."],
  [".", "6", "7", ".", ".", ".", ".", ".", "9"],
  [".", ".", ".", ".", ".", ".", "8", "1", "."],
  [".", "3", ".", ".", ".", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", "7", ".", ".", "."],
  [".", ".", ".", "5", ".", ".", ".", "7", "."],
];

const grid2 = [
  [".", ".", ".", ".", "2", ".", ".", "9", "."],
  [".", ".", ".", ".", "6", ".", ".", ".", "."],
  ["7", "1", ".", ".", "7", "5", ".", ".", "."],
  [".", "7", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", "8", "3", ".", ".", "."],
  [".", ".", "8", ".", ".", "7", ".", "6", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "1", ".", "2", ".", ".", ".", ".", "."],
  [".", "2", ".", ".", "3", ".", ".", ".", "."],
];

function chunkyCheck(grid) {
	return  function(from, to) {
		let chunk = [];
		let tmp = [];
		for(let i = 0; i < grid.length; i++) {
			let part = to;
			for(let j = from; j < to; j++) {
				tmp.push(grid[i][j]);
			}
			chunk = [...chunk, tmp];
			tmp = [];
			part = to;
		}
		const mainChunk = [];
		let part1 = chunk.slice(0, 3).flat();
		let part2 = chunk.slice(3, 6).flat();
		let part3 = chunk.slice(6, 9).flat();

		mainChunk.push(sectionSolving(part1))
		mainChunk.push(sectionSolving(part2))
		mainChunk.push(sectionSolving(part3))

		return mainChunk;
	}
}

function sectionSolving(pos) {
	let clean = [];
	for(let i = 0; i < pos.length; i++) {
		if(+pos[i]) {
			clean.push(pos[i])
		}
	}
	return new Set(clean).size === clean.length;
}

function isSudokuSolving(grid) {
	const rData = [];
	const cData = [];

	let colLineCheck = [];
	let rowLineCheck = [];
	
	let rowCounter = 0;

	for(let i = 0; i < grid.length; i++) {
		colLineCheck = grid[i];
		cData.push(sectionSolving(colLineCheck))
		
		for(let j = 0; j < grid.length; j++) {
				rowLineCheck.push(grid[j][rowCounter])
		}
		rowCounter += 1
		rData.push(sectionSolving(rowLineCheck));
		rowLineCheck = [];
	}

	return [...chunkyCheck(grid)(0, 3), ...chunkyCheck(grid)(3, 6), ...chunkyCheck(grid)(6, 9), ...rData, ...cData].every(item => {
		if(item === false) {
			return false;
		}
		return true
	})
}

console.log(isSudokuSolving(grid1)) //true
console.log(isSudokuSolving(grid2)) //false
