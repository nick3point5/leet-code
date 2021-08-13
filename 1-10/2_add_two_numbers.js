function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var addTwoNumbers = function (l1, l2) {
  const solution = new ListNode(0)
  let node = solution
  let n = 0
  let sum = 0

  while ((l1 || l2) && n < 100) {
    sum += (l1 ? l1.val : 0) + (l2 ? l2.val : 0)

    l1 = l1 ? l1.next : 0
    l2 = l2 ? l2.next : 0

    if (sum >= 10) {
      node.next = new ListNode(sum % 10);
      node = node.next
      sum = 1
      node.next = new ListNode(sum);
    } else {
      node.next = new ListNode(sum);
      node = node.next
      sum = 0
    }

    n++
  }

  return solution.next
};

// https://leetcode.com/problems/add-two-numbers