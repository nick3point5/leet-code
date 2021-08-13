function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function(l1, l2) {
  let node = new ListNode()
  let newNode = node

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      node.next = l1
      l1 = l1.next;
    } else {
      node.next = l2;
      l2 = l2.next;
    }
    node = node.next;
  }

  if(l1 === null) {
    node.next = l2;
  } else if(l2 === null) {
    node.next = l1;
  }

  return newNode.next
};

// https://leetcode.com/problems/merge-two-sorted-lists/