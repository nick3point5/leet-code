var divide = function(dividend, divisor) {
  const result = Math.trunc(dividend/divisor)
  if (result > (2**31-1)) {
    return 2**31-1
  }
  return result
};

// https://leetcode.com/problems/divide-two-integers/