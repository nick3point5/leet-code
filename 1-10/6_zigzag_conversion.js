var convert = function (s, numRows) {
  if (numRows === 1) {
    return s
  }
  
  let result = ""

  if (numRows === 2) {
    for (let i = 0; i < s.length / 2; i++) {
      result += s[i * 2]
    }
    for (let i = 0; i < s.length / 2; i++) {
      result += s[i * 2 + 1] ? s[i * 2 + 1] : ""
    }
    return result
  }

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; s[j * (numRows + 1) + i]; j++) {
      result += s[j * (numRows + numRows - 2) + i] ? s[j * (numRows + numRows - 2) + i] : ""
      if (i !== 0 && i !== numRows - 1 && s[j * (numRows + numRows - 2) + i + (numRows - i - 1) * 2]) {
        result += s[j * (numRows + numRows - 2) + i + (numRows - i - 1) * 2]
      }
    }
  }
  return result
};

// https://leetcode.com/problems/zigzag-conversion/