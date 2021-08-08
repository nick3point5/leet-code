var longestPalindrome = function (s) {
  if (s.length === 1) {
    return s
  }

  const array = s.split("")
  const rs = s.split("").reverse().join("")
  let longest = ""

  const letters = {}

  for (let i = 0; i < array.length; i++) {
    const letter = array[i]
    if (!letters[letter]) {
      letters[letter] = []
    } else {

      for (let j = 0; j < letters[letter].length; j++) {
        if (longest.length <= i - letters[letter][j]) {
          const substring = s.slice(letters[letter][j], i + 1)
          const reverseSubstring = rs.slice(array.length-1-i, array.length-letters[letter][j])
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

function isPalindrome(s) {
  let ans = true;
  s = [...s + '']

  let half = Math.floor(s.length / 2);
  for (let index = 0; index < half; index++) {
    if (s[index] !== s[s.length - index - 1]) {
      ans = false;
    }

  }
  return ans
}

console.log(longestPalindrome("zeusnilemacaronimaisanitratetartinasiaminoracamelinsuez"))