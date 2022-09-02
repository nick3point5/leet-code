var uniquePaths = function(m, n) {
	let row = new Array(n).fill(1)

	for (let i = 0; i < m-1; i++) {
		const newRow = new Array(n).fill(0)
		for (let j = n-1; j >= 0; j--) {
			newRow[j] = newRow.at(j-n+1) + row[j]
		}
		row = newRow
	}

	return row[0]
};

// https://leetcode.com/problems/unique-paths/