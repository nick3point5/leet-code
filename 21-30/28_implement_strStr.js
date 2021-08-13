var strStr = function(haystack, needle) {
    if (haystack === needle) {
      return 0
    }

    regex = new RegExp(needle+"[a-z]*", "g")
    leftStack = haystack.replace(regex,"")

    if (haystack === leftStack) {
      return -1
    }

    return leftStack.length
};

// https://leetcode.com/problems/implement-strstr/