var lengthOfLastWord = function(s) {
	result = s.match(/\w+/g)
	return result[result.length-1].length
};

// https://leetcode.com/problems/length-of-last-word/