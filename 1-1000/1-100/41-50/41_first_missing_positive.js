var firstMissingPositive = function(nums) {
    const nums = nums.filter(num => num >= 0)
    nums.sort((a, b) => a - b)
    if (nums[0] > 1 || nums.length === 0) return 1
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] - nums[i-1]   > 1) return nums[i-1]+1
    }
    return nums[nums.length-1] + 1
};

// https://leetcode.com/problems/first-missing-positive/