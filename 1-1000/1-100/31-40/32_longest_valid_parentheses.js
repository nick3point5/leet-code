var longestValidParentheses = function (s) {
	let longest = 0

	track = {
		'(': 0,
		')': 0,
	}

	for (let i = 0; i < s.length; i++) {
		track[s[i]]++ 
		if (track['(']  === track[')']) {
			if(longest < track['(']*2){
				longest = track['(']*2
			}
		}
		if (track['('] < track[')']) {
			track['('] = 0
			track[')'] = 0
		}
	}

	track['('] = 0
	track[')'] = 0

	for (let i = s.length-1; i > 0; i--) {
		track[s[i]]++ 
		if (track['(']  === track[')']) {
			if(longest < track[')']*2){
				longest = track[')']*2
			}
		}
		if (track['('] > track[')']) {
			track['('] = 0
			track[')'] = 0
		}
	}

	return longest
};

// https://leetcode.com/problems/longest-valid-parentheses/