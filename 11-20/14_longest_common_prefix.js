var longestCommonPrefix = function(strs) {
  if (strs.length < 2) {
    return strs[0]
  }
  if (strs.includes("")) {
    return ""
  }
  let common = ""
  let done = false
  for (let n = 0; strs[0].length; n++) {
    letter = strs[0][n]
    for (let i = 1; i < strs.length; i++) {
      if (letter !== strs[i][n] || !strs[i][n]) {
        done = true
        break
      }
    }
    if (done) {
      break
    }
    common += letter
  }

  return common
};

// https://leetcode.com/problems/longest-common-prefix/