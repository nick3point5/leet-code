var combinationSum = function (candidates, target) {
	const result = []

	function dfs(i, current, sum) {
		const num = candidates[i]
		if (sum === target) {
			result.push([...current])
			return
		}
		if (i >= candidates.length || sum > target) {
			return
		}
		current.push(num)
		dfs(i, current, sum + num)
		current.pop()
		dfs(i + 1, current, sum)
	}

	dfs(0, [], 0)

	return result
}

// https://leetcode.com/problems/combination-sum/