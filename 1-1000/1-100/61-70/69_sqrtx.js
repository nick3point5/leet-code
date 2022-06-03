// var mySqrt = function(x) {
// 	if(x < 2) return x
// 	root = Math.floor(x/(x>>1))
// 	while(root*root < x){
// 			root ++
// 	}  
// 	if (root*root === x) return root
// 	return root-1
// };

var mySqrt = function(x) {
	res = 0;
	bit = 1073741824;
	
	while (bit > x){
			bit >>= 2;		
	}
	
	while (bit != 0) {
			if (x >= res + bit) {
				x -= res + bit;
				res = (res >> 1) + bit;
			} else
				res >>= 1;
			bit >>= 2;
	}
	return res;
};

// https://leetcode.com/problems/sqrtx/