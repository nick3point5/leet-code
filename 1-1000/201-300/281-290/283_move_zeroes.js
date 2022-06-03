var moveZeroes = function(nums) {
	let index = 0
	nums.forEach(()=>{
			if(nums[index]=== 0)nums.push(nums.splice(index, 1))
			else index++
	})
	return nums
};

// https://leetcode.com/problems/move-zeroes/