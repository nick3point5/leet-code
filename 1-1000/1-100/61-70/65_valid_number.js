var isNumber = function(s) {
	const result = s.match(/(-|\+)?(([0-9]+\.[0-9]+)|([0-9]+\.)|(\.?[0-9]+))(e(-|\+)?[0-9]+)?/gi)
	if (!result || result[0] !== s)  return false
	return true
};

// https://leetcode.com/problems/valid-number/