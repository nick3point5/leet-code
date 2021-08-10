var removeDuplicates = function(nums) {
  const length = nums.length
  let lastElement = nums[0]
  for (let i = 1, j = 1; i < length; i++) {
    if (lastElement === nums[j]) {
      nums.splice(j, 1)
    } else {
      lastElement = nums[j]
      j++
    }
  }
  return nums.length
};

// https://leetcode.com/problems/remove-duplicates-from-sorted-array/