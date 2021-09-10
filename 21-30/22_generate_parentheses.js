var generateParenthesis = function(n) {
  // parentheses = {
  //   "(":1,
  //   ")":-1
  // }
for (const key in object) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];
    
  }
}

  // array = ["()"]

  // while (n > 1) {
  //   limit = array.length
  //   for (let  i = 0;  i < limit;  i++) {
  //     array.push("("+array[i]+")")
  //     array.push(array[i]+"()")
  //     if (("()"+array[i]) !== array[array.length-1]) {
  //       array.push("()"+array[i])
  //     }
  //   }
    
  //   for (let  i = 0;  i < limit;  i++) {
  //     array.shift()
  //   }

  //   n--
  // }

  // while (n > 1) {
  //   limit = array.length
  //   for (let  i = 0;  i < limit;  i++) {
  //     stringSum = 0
  //     for (let j = 0; j < array[i].length; j++) {
  //         stringSum += parentheses[array[i][j]]
  //     }

      
  //     array.push(array[i]+"(")
  //     if (stringSum !== 0) {
  //       array.push(array[i]+")")
  //     }
  //   }
    
  //   for (let  i = 0;  i < limit;  i++) {
  //     array.shift()
  //   }

  //   n--
  // }
  result = []
  function backTrack(s =[], left = 0, right = 0) {
    if (s.length === 2*n) {
      result.push(s.join(""))
    }
    if (left < n) {
      s.push("(")
      backTrack(s, left+1, right)
      s.pop()
    }
    if (right < left) {
      s.push(")")
      backTrack(s, left, right+1)
      s.pop()
    }
  }

  backTrack()


  return result
};



console.log(generateParenthesis(3))