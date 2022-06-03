var rotate = function(nums, k) {
	const  rotate = k%(nums.length)
	const end = nums.splice(0, nums.length-rotate)
  end.forEach(num => nums.push(num))
};

// https://leetcode.com/problems/rotate-array/