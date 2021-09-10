var groupAnagrams = function(strs) {
  const map = {}
  const result=[]
  strs.forEach((str)=>{
      const sorted = [[...str].sort().join("")]
      if(!map[sorted]) map[sorted] =[]
      map[sorted].push(str) 
      }
  )
  for(const key in map){
      result.push(map[key])
  }
  return result
};

// https://leetcode.com/problems/group-anagrams/