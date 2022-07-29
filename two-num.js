// 2 LeetCode Java: Add Two Numbers – Medium
// Problem:
// You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) Output: 7 -> 0 -> 8

// Thoughts:
// This problem is given by an easy way. The numbers are stored reversely so that we could add from the left to right. The thing to keep in mind is that the two numbers might not have the same length.

// The most clear way to handle this is to iterate over the two numbers list, iteration continues until reaches the end of the longer list. When the shorter list reaches the end already, consider the digit to be zero.

const Stack = require("./stack");

const list1 = new Stack([]);
const target = 9;

const solution1 = (nums, target) => {
  var result = [];
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

const solution2 = (nums, target) => {
  const result = [];
  var appear = new Map();
  for (var i = 0; i < nums.length; i++) {
    appear.set(nums[i], i);
  }

  const sortElement = (i, j) => {
    return [Math.min(i, j), Math.max(i, j)];
  };
  for (var i = 0; i < nums.length; i++) {
    const matchingKey = target - nums[i];
    if (appear.has(matchingKey)) {
      var j = appear.get(target - nums[i]);
      const isExisting = result.find(
        (e) => JSON.stringify(e) === JSON.stringify(sortElement(i, j))
      );

      if (!isExisting && i != j) {
        result.push([Math.min(i, j), Math.max(i, j)]);
      }
    }
  }
  return result;
};

measureWithRunFunc(solution1, [data, target], "two-sum-1");
measureWithRunFunc(solution2, [data, target], "two-sum-2");
