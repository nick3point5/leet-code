interface Answer {
  (num: number): number;
}

function findMiddleIndex(nums: number[]): number {
  if (nums.length === 1) return 0
  let right: number;

  function sum(accumulate: number, current: number):number {
    return accumulate + current
  }

  function found():Answer {
    let didFind = false
    let num = -1
    return (index: number): number => {
      if (!didFind) {
        didFind = !didFind
        num = index
      }
      return num
    }
  }

  const result=found()  

  const total = nums.reduce(sum); 

  if(nums[0] === total) return 0

  nums.reduce((acc: number, num: number, i: number): number => {
    right = total - acc - num
    if(acc === right) result(i)
    return acc + num
  })

  return result(-1)
};

// https://leetcode.com/problems/find-the-middle-index-in-array/