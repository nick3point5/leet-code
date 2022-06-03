var rotate = function(matrix) {
	n = matrix.length
	for (let i = 0; i < n; i++) {
		for (let j = n-1; j >= 0; j--) {
							matrix[j].unshift(matrix[i].pop())
		}
	}
	return matrix
};

// https://leetcode.com/problems/rotate-image/