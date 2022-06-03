var customSortString = function(S, T) {
  let res = ''
  let SArr = [...S]
  let TArr = [...T]
  

  for (let i = 0; i < SArr.length; i++) {
    if (TArr.includes(SArr[i])) {
      regex = new RegExp(SArr[i], 'g')
      filter = T.match(regex)
      filter = filter.reduce((a,b)=>a+b)
      T=T.replace(regex,'')
      res+=filter
    }
  }
  res+=T
  
  return res
}

// https://leetcode.com/problems/custom-sort-string/