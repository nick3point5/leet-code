function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var removeNthFromEnd = function (head, n) {
  let array =[]
  let node =  head
  let newNode = undefined

  if (!node.next) return node.next

  while(node != null) {
    array.push(node)
    node = node.next;
  }

  for(let i = 0; i <= n; i++) {
    newNode = array.pop()
  }

  if(newNode === null) {
    head = head.next;
  } else if(newNode.next != null ) {
    newNode.next = newNode.next.next;    
  } else {
    newNode.next = null;
  }

  return head;
};

// https://leetcode.com/problems/remove-nth-node-from-end-of-list/