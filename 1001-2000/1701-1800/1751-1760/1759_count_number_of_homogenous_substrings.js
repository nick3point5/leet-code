var countHomogenous = function(s) {
  let result = 0
  let  size = 1
  for (let i = 0; i < s.length; i++) {
    if(s[i] !== s[i-1]) {
      result +=  size*(size+1)/2
      size = 1
    } else {
      size += 1
    }
  }

  if(size) {
    result +=  size*(size+1)/2
  }

  return result%1000000007-1
};

// https://leetcode.com/problems/count-number-of-homogenous-substrings/