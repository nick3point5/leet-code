// var Trie = function () {
// 	this.root = new TrieNode()
// }

// class TrieNode {
// 	constructor() {
// 		this.children = new Map()
// 		this.end = false
// 	}
// }

// Trie.prototype.insert = function (word) {
// 	let current = this.root

// 	for (let i = 0; i < word.length; i++) {
// 		const character = word[i]
// 		const nextNode = current.children.get(character)
// 		if (!nextNode) {
// 			current = current.children.set(character, new TrieNode()).get(character)
// 		} else {
// 			current = nextNode
// 		}
// 	}

// 	current.end = true
// }

// Trie.prototype.search = function (word) {
// 	let current = this.root
// 	for (let i = 0; i < word.length; i++) {
// 		const character = word[i]
// 		const nextNode = current.children.get(character)
// 		if (!nextNode) return false
// 		current = nextNode
// 	}

// 	return current.end
// }

// Trie.prototype.startsWith = function (prefix) {
// 	let current = this.root
// 	for (let i = 0; i < prefix.length; i++) {
// 		const character = prefix[i]
// 		const nextNode = current.children.get(character)
// 		if (!nextNode) return false
// 		current = nextNode
// 	}
// 	return true
// }

class TrieNode {
	constructor() {
		this.children = {}
		this.end = false
	}
}

class Trie{
	constructor() {
		this.root = new TrieNode()
	}
	insert(word) {
		let current = this.root

		for (let i = 0; i < word.length; i++) {
			const character = word[i]
			const nextNode = current.children[character]
			if (!nextNode) {
				current.children[character] = new TrieNode()
				current = current.children[character]
			} else {
				current = nextNode
			}
		}
	
		current.end = true
	}

	search(word) {
		let current = this.root
		for (let i = 0; i < word.length; i++) {
			const character = word[i]
			const nextNode = current.children[character]
			if (!nextNode) return false
			current = nextNode
		}
	
		return current.end
	}

	startsWith(prefix) {
		let current = this.root
		for (let i = 0; i < prefix.length; i++) {
			const character = prefix[i]
			const nextNode = current.children[character]
			if (!nextNode) return false
			current = nextNode
		}
		return true
	}
}

// https://leetcode.com/problems/implement-trie-prefix-tree/