var twoSum = function (nums, target) {
  sum = 0

  for (let i = 1, n = 0; n < nums.length; i++) {
    sum = nums[n] + nums[i]

    if (sum === target) {
      return [n, i]
    }

    if (i >= nums.length - 1) {
      n++
      i = n
    }
  }
};

console.log(twoSum([3,2,4], 6))