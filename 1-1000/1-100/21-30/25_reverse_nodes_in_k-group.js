var reverseKGroup = function (head, k) {
	if (k === 1) return head
	let next = head
	let breakPoint = head
	let current = null
	let i = 0
	let result = null

	while (next !== null) {
		if (i % k === 0) {
			if(result === null) {
				[result, breakPoint] = sliceAndReverse(next, k)
				if(breakPoint=== null) return reverseLinkedList(head)
			} else {
				[breakPoint.next, breakPoint] = sliceAndReverse(next, k)
			}
		}
		next = next.next
		i++
	}

	return result
}

function sliceAndReverse(head, k) {
	const [sliced, next] = slice(head, k)
	if(sliced === null) return [head, null]
	const [start, end] = reverseLinkedList(sliced)
	end.next = next

	return [start, end]
}

function slice(head, k) {
	const newHead = new ListNode(head.val)
	let current = head
	let next = newHead
	for (let i = 0; i < k - 1; i++) {
		if (current.next?.val === undefined) return [null, null]
		next.next = new ListNode(current.next.val)
		next = next.next
		current = current.next

		if (current === null) return [null, null]
	}
	next.next = null
	return [newHead, current.next]
}

function reverseLinkedList(head) {
	return depthReverse(head.next, head)
}

function depthReverse(current, previous) {
	let first = null
	if (current.next !== null) {
		[first, newLink] = depthReverse(current.next, current)
	} else {
		current.next = new ListNode(previous.val, null)
		return [current, current.next]
	}

	newLink.next = new ListNode(previous.val, null)

	return [first, newLink.next]
}

	
// https://leetcode.com/problems/reverse-nodes-in-k-group/