// ! This is the solution for subsets leetcode problem.
// ! you can find the problem at this link: https://leetcode.com/problems/subsets/

// ? This is the helper function that do the backtracing logic.
const backtrace = (answer: number[][], temp: number[], nums: number[], start: number): void => {
  answer.push([...temp]);

  for (let i = start; i < nums.length; i += 1) {
    temp.push(nums[i]);
    backtrace(answer, temp, nums, i + 1);
    temp.pop();
  }
};

// ? The main function for traversing the subsets.
const subsets = (nums: number[]): number[][] => {
  nums.sort((a, b) => a - b);
  const temp: number[] = [];
  const answer: number[][] = [];

  backtrace(answer, temp, nums, 0);

  return answer;
};