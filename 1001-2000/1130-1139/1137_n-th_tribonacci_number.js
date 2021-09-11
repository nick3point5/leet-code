var tribonacci = function(n) {
  const a = Math.pow((19+3*Math.sqrt(33)), 1/3)
  const b = Math.pow((19-3*Math.sqrt(33)), 1/3)
  const c = 3*Math.pow((((a+b+1)/3)), n+1)
  return Math.round(c/(a*a+b*b+4))
};

// https://leetcode.com/problems/n-th-tribonacci-number/