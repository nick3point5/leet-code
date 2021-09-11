var isMatch = function(s, p) {
  const regex = new RegExp("^"+p,'g')
  return !s.replace(regex,"")
};

// https://leetcode.com/problems/regular-expression-matching/