var uncommonFromSentences = function(s1, s2) {
  let map = new Map()
  const result = []
  s1 =s1.split(' ')
  s2 =s2.split(' ')

  s1.forEach(word => {
      if(map.get(word) === undefined){
          map.set(word, true)
      } else if(map.get(word)) {
          map.set(word, false)
      }
  });

  s2.forEach(word => {
      if(map.get(word) === undefined){
          map.set(word, true)
      } else if(map.get(word)) {
          map.set(word, false)
      }
  });

  map.forEach((unique, word)=>{
      if (unique)  result.push(word)
  })

  return result
};

// https://leetcode.com/problems/uncommon-words-from-two-sentences/