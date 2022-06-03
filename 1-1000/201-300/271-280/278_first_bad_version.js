var solution = function(isBadVersion) {
	return (n) => {
		let start = 0
		let end = n

		while (start < end) {
			const mid = Math.floor((end + start) / 2)
			if(isBadVersion(mid)){
				end = mid
			}else{
				start = mid+1
			}
		}

		return start
	};
};

// https://leetcode.com/problems/first-bad-version/