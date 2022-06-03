var intToRoman = function (num) {
  const numerals = {
    "0": "",
    "1": "I",
    "2": "II",
    "3": "III",
    "4": "IV",
    "5": "V",
    "6": "VI",
    "7": "VII",
    "8": "VIII",
    "9": "IX",
    "10": "X",
    "20": "XX",
    "30": "XXX",
    "40": "XL",
    "50": "L",
    "60": "LX",
    "70": "LXX",
    "80": "LXXX",
    "90": "XC",
    "100": "C",
    "200": "CC",
    "300": "CCC",
    "400": "CD",
    "500": "D",
    "600": "DC",
    "700": "DCC",
    "800": "DCCC",
    "900": "CM",
    "1000": "M",
    "2000": "MM",
    "3000": "MMM",
  }

  let result = ""

  result += numerals[num % 10000 - num % 1000 + ""]
  result += numerals[num % 1000 - num % 100 + ""]
  result += numerals[num % 100 - num % 10 + ""]
  result += numerals[num % 10 + ""]

  return result

};

// https://leetcode.com/problems/integer-to-roman/