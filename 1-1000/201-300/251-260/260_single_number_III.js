var singleNumber = function(nums) {
	let result = []
	nums.sort()
	for(let i = 0; i < nums.length; i += 2){
		if(nums[i] !== nums[i + 1]) {
			result.push(nums[i])
			i--
		}
	}
	return result
};

// https://leetcode.com/problems/single-number-iii/