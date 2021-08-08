var lengthOfLongestSubstring = function(s) {
    characters = []
    s = [...s]
    longest = ""

    for (let i = 0, n = 0; i < s.length; i++, n++) {
      if (characters.includes(s[i])) {
        if (characters.length > longest.length) {
          longest = characters.join("")
        }

        while (characters.includes(s[i])) {
          characters.shift()
        }

        n = characters.length


      }
      characters[n] = s[i]
    }


    if (characters.length === s.length) {
      return characters.length
    }

    if (characters.length > longest.length) {
      longest = characters.join("")
    }

    return longest.length
};

console.log(lengthOfLongestSubstring("ohvhjdml"))