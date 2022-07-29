// 1 Leetcode Java: Two Sum – Medium
// Problem
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].

// UPDATE (2016/2/13): The return format had been changed to zero-based indices. Please read the above updated description carefully.

// Thoughts:
// The most straight forward solution would be a nested loop. This would end up with running complicity of O(n2).

// With the help of a hash-table, we could improve running complicity to O(n), but this requires space O(n). This is very common in coding problem. Sometimes, in order to improve the running time, you have to trade off on space.

const measureWithRunFunc = require("./analytics");

const data = [2, 7, 11, 15, 18, 20, 21, 2, 9, 4, 5, 6, 2, 3, 4, 9, 0, 12, 23];
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
