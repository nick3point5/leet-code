var singleNumber = function(nums) {
	nums.sort()
	for(let i = 0; i < nums.length; i += 3){
		if(nums[i] !== nums[i + 1]) return nums[i]
	}
};

// https://leetcode.com/problems/single-number-ii/