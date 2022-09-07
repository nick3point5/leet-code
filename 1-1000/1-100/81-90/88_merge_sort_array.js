// var merge = function(nums1, m, nums2, n) {
// 	let length = m + n
// 	for (let i = m; i < length; i++) {
// 			nums1[i] = nums2[i-m]
// 	}
// 	nums1.sort((current, next) =>  current - next)
// };

var merge = function (nums1, m, nums2, n) {
	let p1 = m - 1
	let p2 = n - 1

	for (let i = nums1.length - 1; i >= 0; i--) {
		if (p1 >= 0 && p2 >= 0) {
			nums1[i] = nums1[p1] > nums2[p2] ? nums1[p1--] : nums2[p2--]
		} else if (p1 >= 0) {
			nums1[i] = nums1[p1--]
		} else {
			nums1[i] = nums2[p2--]
		}
	}
}

// https://leetcode.com/problems/merge-sorted-array/
