var searchRange = function (nums, target) {
	const last = nums.length - 1;
	const left = nums.findIndex((n) => n === target);
	if (left < 0) return [-1, -1];
	if (nums[last] === target) return [left, last];
	nums.reverse();
	const right = nums.findIndex((n) => n === target);
	return [left, last - right];
};

// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
