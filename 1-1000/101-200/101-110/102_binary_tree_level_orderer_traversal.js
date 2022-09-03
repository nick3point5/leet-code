// var levelOrder = function (root) {
// 	const levels = []
// 	if (!root || root?.val === undefined) return levels
// 	levels.push([root.val])
// 	function searchLevel(root, level) {
// 		if (root === null) return

// 		if (root.left !== null) {
// 			if (!levels[level]) levels[level] = []
// 			levels[level].push(root.left.val)
// 		}

// 		if (root.right !== null) {
// 			if (!levels[level]) levels[level] = []
// 			levels[level].push(root.right.val)
// 		}
// 		searchLevel(root?.left, level + 1)
// 		searchLevel(root?.right, level + 1)
// 	}
// 	searchLevel(root, 1)
// 	return levels
// }

var levelOrder = function (root) {
	const queue = [root]
	const result = []

	while (queue.length) {
		const level = []
		const n = queue.length

		for (let i = 0; i < n; i++) {
			const node = queue.shift()
			if (node) {
				level.push(node.val)
				queue.push(node.left)
				queue.push(node.right)
			}
		}
		if (level.length) {
			result.push(level)
		}
	}

	return result
}

// https://leetcode.com/problems/binary-tree-level-order-traversal/
