var invertTree = function(root) {
	if(!root) return root;
	return invert(root);
};

function invert(node) {
	if(!node) return null;
	const newNode = { val: node.val };
	newNode.left = invert(node.left);
	newNode.right = invert(node.right);
	//swap
	const temp = newNode.left;
	newNode.left = newNode.right;
	newNode.right = temp;
	return newNode;
}


// https://leetcode.com/problems/invert-binary-tree/