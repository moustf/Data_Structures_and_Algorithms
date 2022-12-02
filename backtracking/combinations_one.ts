// ! This is the solution for first combination leetcode problem.
// ! you can find the problem at this link: https://leetcode.com/problems/combination-sum/

// ? This is the helper function that do the backtracing logic.
const backtrack = (
  candidates: number[], target: number, ans: number[][], temp: number[], start
): void => {
  if (target === 0) {
    ans.push(temp.slice());
    return;
  }

  for (let i = start; i < candidates.length && target >= candidates[i]; i++) {
    temp.push(candidates[i]);
    backtrack(candidates, target - candidates[i], ans, temp, i);
    temp.pop();
  }
}

// ? The main function for traversing the subsets.
const combinationSum = (candidates: number[], target: number): number[][] => {
  candidates.sort((a, b) => a - b);
  const ans: number[][] = [];
  const temp: number[] = [];

  backtrack(candidates, target, ans, temp, 0);
  return ans;
};
