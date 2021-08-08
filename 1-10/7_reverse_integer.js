var reverse = function(x) {
    x = [...x + ""]
    if ( x[0]==="-") {
      x.shift()
      x.reverse().unshift("-")
      x = x.join("").replace(/0+$/,"")
      if (+x < ((-2)**31)) {
        return 0
      }
      return x
    }
    x = x.reverse().join("").replace(/0+$/,"")
    if (+x > (2**31 - 1)) {
      return 0
    }
    return x
};

// https://leetcode.com/problems/reverse-integer/