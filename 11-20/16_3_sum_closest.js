var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b)

  let result = 0
  let minimum = Infinity

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] != nums[i - 1]) {
      let left = i + 1
      let right = nums.length - 1
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right]
        const difference = target-sum
        if (difference**2 < minimum**2  ) {
          result=sum;
          if (sum===target) {
            i = nums.length
            break
          }
          minimum=difference;
          left++
          right--
          while (nums[left] === nums[left - 1]) left++
          while (nums[right] === nums[right + 1]) right--
        }
        else if (difference > 0) { right-- }
        else if (difference < 0) { left++ }
      }
    }
  }
  return result
};

console.log(threeSumClosest([0,2,1,-3],1))


// https://leetcode.com/problems/3sum-closest/