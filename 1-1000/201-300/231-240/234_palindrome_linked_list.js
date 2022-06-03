var isPalindrome = function(head) {
	arr = []
	value = head.val
	arr.push(value)

	while(head.next){
			head = head.next
			value=head.val
			arr.push(value)
	}
	
	return arr.every((a, i)=>a === arr[arr.length-1-i])
};

// https://leetcode.com/problems/palindrome-linked-list/