var climbStairs = function(n) {
	if(n === 1) return 1
	if(n === 2) return 2
	let previous = [2, 1]
	let result = 3
	for(let i = 2; i < n; i++) {
			result = previous[0] + previous[1]
			previous[1] = previous[0]
			previous[0] = result
	}
	return result
};

// https://leetcode.com/problems/climbing-stairs/