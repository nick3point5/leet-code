var restoreString = function (s, indices) {
	const letterTable = []
	let result = ""

	indices.forEach((val, i)=> {
		letterTable.push(
			[val, s[i]]
		)
	})

	letterTable.sort((a, b) => a[0] - b[0])

	letterTable.forEach(letter => result += letter[1])

	return result
}

// https://leetcode.com/problems/shuffle-string/