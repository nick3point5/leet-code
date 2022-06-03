var isHappy = function(n) {
	numbers=[]
	while(!numbers.includes(n)){
			numbers.push(n)
			const digits = Array.from(String(n), Number) 
			n=digits.map(num=>num*num).reduce((acc,num)=>acc+num)
			if(n===1)return true
	}
	return false
};

// https://leetcode.com/problems/happy-number/