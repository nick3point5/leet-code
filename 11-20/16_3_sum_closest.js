var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)

  let result = 0
  let minimum = Infinity

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]

      if (sum === target) return sum

      const difference = target-sum

      if (difference ** 2 < minimum ** 2) {
        minimum = difference
        result = sum
      }
      sum > target ? right-- : left++
    }
  }

  return result
};

const nums = [4, 0, 5, -5, 3, 3, 0, -4, -5], target = -1

console.log(threeSumClosest(nums, target))


// https://leetcode.com/problems/3sum-closest/