var isValid = function(s) {
  lastString = ""
  while (lastString !== s) {
    lastString = s
    s = s.replace(/(\[\])|(\{\})|(\(\))/g, "")
  }
  return !s
};

// https://leetcode.com/problems/valid-parentheses/submissions/