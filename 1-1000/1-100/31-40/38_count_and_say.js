var countAndSay = function(n) {
  let last = '1'
  for (let i = 1; i < n; i++) {
    let numString = ''
    while (last) {
      const countString = (''+last).match(/(^1+)|(^2+)|(^3+)|(^4+)|(^5+)|(^6+)|(^7+)|(^8+)|(^9+)/g)[0]
      const sayString = countString.length + countString[0]
      last = last.substring(countString.length,last.length)
      numString += sayString
    }
    last = numString
  }
  return last
}

// https://leetcode.com/problems/count-and-say/