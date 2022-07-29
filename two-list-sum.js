// 2 LeetCode Java: Add Two Numbers – Medium
// Problem:
// You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) Output: 7 -> 0 -> 8

// Thoughts:
// This problem is given by an easy way. The numbers are stored reversely so that we could add from the left to right. The thing to keep in mind is that the two numbers might not have the same length.

// The most clear way to handle this is to iterate over the two numbers list, iteration continues until reaches the end of the longer list. When the shorter list reaches the end already, consider the digit to be zero.

const Stack = require("./stack");

const list1 = new Stack([2, 4, 3]);
const list2 = new Stack([5, 6, 4]);

const solution = (nums, target) => {};

measureWithRunFunc(solution, [list1, list2], "list");
