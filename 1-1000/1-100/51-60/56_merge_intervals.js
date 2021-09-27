var merge = function(intervals) {
	let result = []
	intervals.sort((a, b) => a[0] - b[0])
	let current = intervals[0]
	for (let index = 1; index < intervals.length+1; index++) {
		if (intervals[index] && current[1] >= intervals[index][0]) {
			const start = current[0] < intervals[index][0]
				?current[0]
				:intervals[index][0]
			const end = current[1] > intervals[index][1]
				?current[1]
				:intervals[index][1]
			current = [start, end]
		} else {
			result.push(current)
			current= intervals[index]
		}
	}

	return result
};

// https://leetcode.com/problems/merge-intervals/