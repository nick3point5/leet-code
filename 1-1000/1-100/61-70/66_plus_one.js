var plusOne = function(digits) {
	return Array.from((BigInt(digits.join(''))+1n).toString(), Number)
};

// https://leetcode.com/problems/plus-one/