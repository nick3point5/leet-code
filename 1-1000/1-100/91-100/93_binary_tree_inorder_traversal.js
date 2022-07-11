var inorderTraversal = function(root) {
	result=[]
	function travel(root) {
			if(root !== null) {
					travel(root.left)
					result.push(root.val)
					travel(root.right)
			}
	}
	travel(root)
	return result
};

// https://leetcode.com/problems/binary-tree-inorder-traversal/