var isPalindrome = function (x) {
  x = [...x + ""]
  const half = Math.floor(x.length / 2);
  for (let index = 0; index < half; index++) {
    if (x[index] !== x[x.length - index - 1]) {
      return false;
    }
  }
  return true
};

// https://leetcode.com/problems/palindrome-number/