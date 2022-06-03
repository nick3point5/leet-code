var numberToWords = function(num) {
	const numStr = num+""
	const array = [...numStr]	
	const strArray = []
	const iteration = Math.ceil(numStr.length/3)
	const words = {
		"0": "",
		"1": "One",
		"2": "Two",
		"3": "Three",
		"4": "Four",
		"5": "Five",
		"6": "Six",
		"7": "Seven",
		"8": "Eight",
		"9": "Nine",
		"10": "Ten",
		"11": "Eleven",
		"12": "Twelve",
		"13": "Thirteen",
		"14": "Fourteen",
		"15": "Fifteen",
		"16": "Sixteen",
		"17": "Seventeen",
		"18": "Eighteen",
		"19": "Nineteen",
		"20": "Twenty",
		"30": "Thirty",
		"40": "Forty",
		"50": "Fifty",
		"60": "Sixty",
		"70": "Seventy",
		"80": "Eighty",
		"90": "Ninety",
		"100": "Hundred",
		"1000": "Thousand",
		"1000000": "Million",
		"1000000000": "Billion"
	}
	let result = []

	if(numStr === "0")  return "Zero"

	for (let i = 0; i < iteration; i++) {
		if(array.length > 3) {
			strArray.unshift(array.splice(array.length-3,3).join(""))
		}else{
			strArray.unshift(array.splice(0,3).join(""))
		}
	}

	for (let i = strArray.length - 1; i >= 0; i--) {
		const string = strArray[i]

		let group = ""


		if(string%100 < 20) {
			group += " " + words[string%100]
		}else{
			group += " " + words[string%100-string%10]
			group += " " + words[string%10]
		}
	
		if(string >= 100) {
			group = " " + words[string[0]] + " " + words["100"] + group
		}
		
		result.push(group.replace(/^\s|\s$/g, ""))

	}

	result = result.map((group, i) => {
		if (group === "") return ""
			if(i > 0){
				return group + " " + words[1000**i+""]
			} else  {
				return group
			}
		})

	result = result.filter(group => group !== "")
	result = result.reverse()
	result = result.join(" ")

	return result
};

// https://leetcode.com/problems/integer-to-english-words/