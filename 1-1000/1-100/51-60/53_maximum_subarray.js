var maxSubArray = function (nums) {
	let max_sum = nums[0];
	let curr_sum = 0;

	for (let i = 0; i < nums.length; i++) {
		curr_sum += nums[i];
		if (curr_sum > max_sum) max_sum = curr_sum;
		if (curr_sum < 0) curr_sum = 0;
	}
	return max_sum;
};

// https://leetcode.com/problems/maximum-subarray/