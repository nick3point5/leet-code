var findMedianSortedArrays = function (nums1, nums2) {
  result = nums1.concat(nums2).sort((a, b) => a - b)

  if (result.length % 2) {
    number = result[(result.length - 1) / 2]
  } else {
    number = (result[(result.length - 2) / 2] + result[(result.length) / 2]) / 2
  }

  return result

};

// https://leetcode.com/problems/median-of-two-sorted-arrays/