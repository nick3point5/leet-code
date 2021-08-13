function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function(l1, l2) {
  let nodeArray = []
  let newNode = null
  while (hasValue(l1) || hasValue(l2)) {
    if (hasValue(l1)) {
      nodeArray.unshift(l1.val)
        l1 = l1.next
    }
    if (hasValue(l2)){
      nodeArray.unshift(l2.val)
        l2 = l2?.next
    }
  }

  nodeArray.sort((a, b) => b - a)

  for (let i = 0; i < nodeArray.length; i++) {
    newNode = new ListNode(nodeArray[i], newNode)
  }

  return newNode
};

function hasValue(node) {
  return !!(node?.val || node?.val === 0)
}