function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var removeNthFromEnd = function (head, n) {
  let node = head
  let right = undefined
  let left = undefined
  let newNode = undefined
  let nodeLength = 0

  for (let i = 0; node.next; i++) {    
    node = node.next
    nodeLength++
  }

  if (!nodeLength) {
    return node.next
  }

  node = head

  for (let i = 0; i < nodeLength + 1; i++) {
    if (i < nodeLength-n+1) {
      left = new ListNode(node.val,left)
    } else if (i > nodeLength-n+1) {
      right = new ListNode(node.val,right)
    }
    node = node.next
  }

  for (let i = 0; i < nodeLength + 1; i++) {
    if (i < n-1) {
      newNode = new ListNode(right.val,newNode)
      right = right.next
    } else if (i >= n) {
      newNode = new ListNode(left.val,newNode)
      left = left.next
    }
  }

  return newNode
};