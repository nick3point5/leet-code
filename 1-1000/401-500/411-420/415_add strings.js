// var addStrings = function(num1, num2) {
// 	let result = ''
// 	let index = 0
// 	let carry = 0

// 	while (num1[num1.length-index-1] || num2[num2.length-index-1]) {
// 		const numDigit1 = num1[num1.length-index-1]?num1[num1.length-index-1]:0
// 		const numDigit2 = num2[num2.length-index-1]?num2[num2.length-index-1]:0
// 		const digit = Number(numDigit1) + Number(numDigit2) + carry
// 		if (digit > 9) {
// 			carry = 1
// 		} else {
// 			carry = 0
// 		}
// 		result = digit%10 + result
// 		index++
// 	}

// 	if (carry) {
// 		result = carry + result
// 	}
	
// 	return result
// }

var addStrings = function(num1, num2) {
	return (BigInt(num1)+BigInt(num2)).toString()
};

// https://leetcode.com/problems/add-strings/