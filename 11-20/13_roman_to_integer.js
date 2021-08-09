var romanToInt = function(s) {
  const numerals = {
    "CM" : 900,
    "CD" : 400,
    "XC" : 90,
    "XL" : 40,
    "IX" : 9,
    "IV" : 4,
    "I" : 1,
    "V" : 5,
    "X" : 10,
    "L" : 50,
    "C" : 100,
    "D" : 500,
    "M" : 1000,
  }

  let result = 0

  for (const key in numerals) {
    const re = new RegExp(key,'g')
    if (s.match(re)) {
      result += s.match(re).length * numerals[key]
      s = s.replace(re,"")
    }
  }

  return result
};

// https://leetcode.com/problems/roman-to-integer/