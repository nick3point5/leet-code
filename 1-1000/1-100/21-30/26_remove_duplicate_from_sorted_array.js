var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0
  if (nums.length === 1) return 1
  let j = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[j]) {
      nums[j + 1] = nums[i]
      j++
    }
  }
  return ++j
};

// https://leetcode.com/problems/remove-duplicates-from-sorted-array/