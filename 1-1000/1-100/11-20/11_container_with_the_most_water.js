var maxArea = function (height) {
  maximum = 0
  leftPosition = 0
  rightPosition = height.length - 1
  isLeftHigher = height[leftPosition] > height[rightPosition]

  for (let i = 0; i < height.length; i++) {
    width = rightPosition - leftPosition
    waterHeight = height[leftPosition] > height[rightPosition] ? height[rightPosition] : height[leftPosition]
    area = waterHeight * width

    if (area > maximum) {
      maximum = area
    }

    if (isLeftHigher) {
      rightPosition--
    } else {
      leftPosition++
    }

    isLeftHigher = height[leftPosition] > height[rightPosition]

  }

  return maximum
};

// https://leetcode.com/problems/container-with-most-water/submissions/