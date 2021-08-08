var longestPalindrome = function (s) {
  if (s.length === 1) {
    return s
  }

  const letters = {}
  const array = s.split("")
  const rs = s.split("").reverse().join("")
  let longest = ""

  for (let i = 0; i < array.length; i++) {
    const letter = array[i]
    if (!letters[letter]) {
      letters[letter] = []
    } else {
        for (let j = 0; j < letters[letter].length; j++) {
          if (longest.length <= i - letters[letter][j]) {
            const substring = s.slice(letters[letter][j], i + 1)
            const reverseSubstring = rs.slice(array.length - 1 - i, array.length - letters[letter][j])
            if (substring === reverseSubstring) {
              longest = substring
            }
          }
        }
      }
    letters[letter].push(i)
  }

  if (!longest) {
    return s[0]
  }

  return longest
};

// https://leetcode.com/problems/longest-palindromic-substring/