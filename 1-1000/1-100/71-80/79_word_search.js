var exist = function (board, word) {
	let result = false
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			const position = [i, j]
			if (dfs(position, word)) return true
		}
	}

	function dfs(position, word) {
		const [i, j] = position
		if (i < 0 || i >= board.length) return false
		if (j < 0 || j >= board[0].length) return false

		const letter = board[i][j]
		if (letter !== word[0]) return false

		word = word.substring(1)

		board[i][j] = ''

		if (word === '') return true

		if (dfs([i + 1, j], word)) return true
		if (dfs([i - 1, j], word)) return true
		if (dfs([i, j + 1], word)) return true
		if (dfs([i, j - 1], word)) return true

		board[i][j] = letter
		return false
	}

	return result
}

// https://leetcode.com/problems/word-search/