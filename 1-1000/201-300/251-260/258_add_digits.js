var addDigits = function(num) {
	while(num>9){
			const digits = Array.from(String(num), Number)
			num = digits.reduce((acc,n)=>acc+n)
	} 
	return num
};

// https://leetcode.com/problems/add-digits/