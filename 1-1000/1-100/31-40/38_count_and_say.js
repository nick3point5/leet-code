var countAndSay = function(n) {
  let last = '1'
  for (let i = 1; i < n; i++) {
    let numString = ''
    const digitArray = last.match(/(1+)|(2+)|(3+)/g)
    digitArray.forEach(digit => {
      const sayString = digit.length + digit[0]
      numString += sayString
    });
    last = numString
  }
  return last
}

// https://leetcode.com/problems/count-and-say/

