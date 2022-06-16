var hammingWeight = function(n) {
	if(n === 0) return 0
	return n.toString(2).match(/1/g).length
};

// https://leetcode.com/problems/number-of-1-bits/