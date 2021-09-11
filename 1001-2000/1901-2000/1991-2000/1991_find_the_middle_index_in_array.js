function findMiddleIndex(nums) {
  let right;

  function sum(accumulate, current){
    return accumulate + current
  }

  const total = nums.reduce(sum); 

  function found() {
    let didFind = false
    let num = -1
    return (index) => {
      if (!didFind) {
        didFind = !didFind
        num = index
      }
      return num
    }
  }

  const result=found()

  nums.reduce((acc, num, i) => {
    right = total - acc - num
    if(acc === right) result(i)
    return acc + num
  })

  return result(-1)
};

// https://leetcode.com/problems/find-the-middle-index-in-array/