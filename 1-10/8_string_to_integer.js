var myAtoi = function (s) {
  s = s.replace(/^\s+/g, "")
  if (!s.match(/^[\-\+][0-9]+|^[0-9]/g)) {
    return 0
  }
  let number = +s.match(/-[0-9]+|\+[0-9]+|[0-9]+/g)[0]

  if (number < ((-2) ** 31)) {
    return (-2) ** 31
  }

  if (number > (2 ** 31 - 1)) {
    return 2 ** 31 - 1
  }
  return number
};


// https://leetcode.com/problems/string-to-integer-atoi/