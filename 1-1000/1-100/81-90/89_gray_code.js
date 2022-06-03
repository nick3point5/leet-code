var grayCode = function(n) {
  let array = [0]

  for (let i = 1; i <= n; i++) {
    array.push(...array.slice(0).reverse().map(item => item + 2**(i - 1)))
  }


  return array
};

// https://leetcode.com/problems/gray-code/