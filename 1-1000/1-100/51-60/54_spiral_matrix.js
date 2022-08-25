var spiralOrder = function(matrix) {
	const result = []

	while(matrix.length !== 0) {
		right(matrix,result)
		down(matrix,result)
		left(matrix,result)
		up(matrix,result)
	}

	return result

};

function right(matrix,result) {
	const length =  matrix[0].length
	for (let i = 0; i < length; i++) {
		const val = matrix[0].shift()
		if(val=== undefined) return
		result.push(val)
	}
	matrix.shift()
}
function down(matrix,result) {
	const length =  matrix.length
	for (let i = 0; i < length; i++) {
		const val = matrix[i].pop()
		if(val=== undefined) return
		result.push(val)
	}
}
function left(matrix,result) {
	if(matrix.length === 0) return
	const length =  matrix[matrix.length-1].length
	for (let i = 0; i < length; i++) {
		const val = matrix[matrix.length-1].pop()
		if(val=== undefined) return
		result.push(val)
	}
	matrix.pop()
}
function up(matrix,result) {
	const length =  matrix.length
	for (let i = matrix.length-1; i > 0; i--) {
		const val = matrix[i].shift()
		if(val=== undefined) return
		result.push(val)
	}
}

// https://leetcode.com/problems/spiral-matrix/