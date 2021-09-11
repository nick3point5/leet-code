var letterCombinations = function (digits) {
  if (!digits) return []

  const digitsArray = [...digits]
  let result = [""]

  digitsArray.forEach(digit => {
    result = addLetters(digit, result)
  });

  return result
};

const addLetters = (digit, resultArray) => {
  numberToLetters = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
  }

  let result = []

  for (let i = 0; i < resultArray.length; i++) {
    for (let j = 0; j < numberToLetters[digit].length; j++) {
      result.push(resultArray[i] + numberToLetters[digit][j])
    }
  }

  return result
}

// https://leetcode.com/problems/letter-combinations-of-a-phone-number/