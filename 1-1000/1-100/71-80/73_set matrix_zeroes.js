var setZeroes = function(matrix) {
	const zeroMap = findZeros(matrix)
	zeroMap[0].forEach(x=>setColumn(matrix,x))
	zeroMap[1].forEach(y=>setRow(matrix,y))
};

function findZeros(matrix) {
	const mapX = new Map
	const mapY = new Map
	matrix.forEach((row,y)=>{
			row.forEach((num,x)=> {
					if(num===0) {
							if(!mapX.get(x)) mapX.set(x,x)
							if(!mapY.get(y)) mapY.set(y,y)
					}
			})
	})
	return [mapX,mapY]
}

function setRow(matrix,y) {
	matrix[y]=matrix[y].map(()=>0)
}

function setColumn(matrix,x) {
	matrix.forEach(col=>{col[x]=0})
}

// https://leetcode.com/problems/set-matrix-zeroes/submissions/