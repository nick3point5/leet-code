var fourSum = function(nums, target) {
  if (nums.length < 4) {
    return []
  }

  nums.sort((a, b) => a - b)

  let result = []

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] != nums[i - 1]) {
      const  threeSum = threeSumWithTarget(nums.slice(i+1),target-nums[i])
      if (threeSum.length) {
        for (let j = 0; j < threeSum.length; j++) {
          result.push([nums[i]].concat(threeSum[j]));
        }
      }
    }
  }
  return result
};

var threeSumWithTarget = function (nums, target) {
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
        if (sum === target) {
          result.push([nums[i], nums[left], nums[right]]);
          left++
          right--
          while (nums[left] === nums[left - 1]) left++
          while (nums[right] === nums[right + 1]) right--
        }else{
          sum > target ? right-- : left++
        }
      }
    }
  }
  return result
};

// https://leetcode.com/problems/4sum/