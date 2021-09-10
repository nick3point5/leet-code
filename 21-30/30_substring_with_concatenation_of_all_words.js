var findSubstring = function (s, words) {
	const result = [];

	for (let i = 0; i < s.length; i++) {
		currentString = s.slice(i, s.length);
		if (isNext(currentString, words)) {
			result.push(i);
		}
	}

	return result;
};

function isNext(s, words) {
	const match = findMatch(s, words);

	if (!match) return false;

	const newWords = getNewWords(match, words);
	const newString = s.slice(match.length, s.length);

	if (newWords.length === 0) return true;
	if (isNext(newString, newWords)) return true;

	return false;
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

function findMatch(s, words){
  for (let i = 0; i < words.length; i++) {
    if(words[i] === s.slice(0, words[i].length)) return words[i]
  }
}

s = "barfoofoobarthefoobarman"
words = ["bar","foo","the"]

console.log(findSubstring(s, words));