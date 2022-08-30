var nextPermutation = function (nums) {
	if(nums.length < 2 || nums === null)  return
	let i = nums.length-2
	while(i >= 0 && nums[i + 1] <= nums[i]) i--
	if(i >= 0) {
		let j = nums.length-1
		while(nums[j]<= nums[i]) j--
		swap(nums, i, j)
	}
	reverse(nums, i+1, nums.length-1)
}

function swap(nums, i, j) {
	temp = nums[i]
	nums[i] = nums[j]
	nums[j] = temp
}

function reverse(nums, i, j) {
	while(i < j) {
		swap(nums, i++, j--)
	}
}

// https://leetcode.com/problems/next-permutation/