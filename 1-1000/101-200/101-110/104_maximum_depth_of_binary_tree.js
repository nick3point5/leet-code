var maxDepth = function(root) {
	return searchDepth(root, 0)
};

function searchDepth(root, depth) {
	if(root === null) return depth
	depth++
	let [leftDepth, rightDepth] = [depth, depth] 
	if(root?.left) {
			leftDepth = searchDepth(root.left, depth)
	}
	if(root?.right) {
			rightDepth = searchDepth(root.right, depth)
	}
	return leftDepth > rightDepth ? leftDepth : rightDepth
}

// https://leetcode.com/problems/maximum-depth-of-binary-tree/