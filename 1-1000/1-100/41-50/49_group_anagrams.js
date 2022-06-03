var groupAnagrams = function(strs) {
  const map = new Map()
  for (const str of strs) {
    const sorted = [...str].sort().join("")
        if(!map.has(sorted)) {
            map.set(sorted, [str])
        }else{
            map.get(sorted).push(str);
        }
    }
  return [...map.values()]
};

// https://leetcode.com/problems/group-anagrams/