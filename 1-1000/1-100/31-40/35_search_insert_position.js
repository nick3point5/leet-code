var searchInsert = function(nums, target) {
	if(nums[0]> target)return 0
	const index = nums.indexOf(nums.find(element => element >= target))
	return index !== -1 ? index : nums.length
};

// https://leetcode.com/problems/search-insert-position/