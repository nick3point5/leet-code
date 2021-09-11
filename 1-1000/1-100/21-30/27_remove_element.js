var removeElement = function (nums, val) {
  nums.sort((a, b) => a === val ? 1 : -1)
  const result = nums.indexOf(val)
  if (result = -1) {
    return nums.length
  }
  return result
};

// https://leetcode.com/problems/remove-element/