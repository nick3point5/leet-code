var reverseList = function(head) {
	if(!(head) || head.next === null) return head
	const [first, end]= depthSearch(head.next, head)
	return first
};

function depthSearch(current, previous) {
	let first = null
	if(current.next !== null) {
			[first, newLink]=depthSearch(current.next, current)
	} else {
			current.next =  new ListNode(previous.val, null)
			return [current, current.next]
	}
	
	newLink.next = new ListNode(previous.val, null)
	
	return [first, newLink.next]
}

// https://leetcode.com/problems/reverse-linked-list/