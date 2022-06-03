var threeSum = function (nums) {
  if (nums.length < 3) {
    return []
  }

  nums.sort((a, b) => a - b)

  let result = []

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] != nums[i - 1]) {
      let left = i + 1
      let right = nums.length - 1
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right]
        if (sum === 0) {
          result.push([nums[i], nums[left], nums[right]]);
          left++
          right--
          while (nums[left] === nums[left - 1]) left++
          while (nums[right] === nums[right + 1]) right--
        }
        else if (sum > 0) { right-- }
        else if (sum < 0) { left++ }
      }
    }
  }
  return result
};

// https://leetcode.com/problems/3sum/

