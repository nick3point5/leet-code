function findMatch(s, words){
  for (let i = 0; i < words.length; i++) {
    if(words[i] === s.slice(0, words[i].length)) return words[i]
  }
}

function getNewWords(word, words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word) {
      const left = words.slice(0, i)
      const right = words.slice(i+1)
      return left.concat(right)
    }
  }
  return words
}

function isNext(s, words) {
	let newWords = words;
	let newString = s;

	for (let i = 0; i < words.length; i++) {
		const match = findMatch(newString, newWords);
		if (!match) return false;
		newWords = getNewWords(match, newWords);
		newString = newString.slice(match.length, newString.length);
	}

	return true;
}

var findSubstring = function (s, words) {
	const result = [];

	const subStringSize = words.length*words[0].length

	for (let i = 0; i < s.length-subStringSize+1; i++) {
		currentString = s.slice(i, s.length);
		if (isNext(currentString, words)) {
			result.push(i);
		}
	}

	return result;
};

// https://leetcode.com/problems/substring-with-concatenation-of-all-words/