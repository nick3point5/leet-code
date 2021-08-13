var mergeKLists = function (lists) {
  if (lists.length === 0) return null
  if (lists.length === 1) return lists[0]

  let m = Math.floor(lists.length / 2)

  let l1 = mergeKLists(lists.slice(0, m))
  let l2 = mergeKLists(lists.slice(m))

  return mergeTwoLists(l1, l2)
};

var mergeTwoLists = function (l1, l2) {
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

  if (l1 === null) {
    node.next = l2;
  } else if (l2 === null) {
    node.next = l1;
  }

  return newNode.next
};