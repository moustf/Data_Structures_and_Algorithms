// ! This is the solution for second combination leetcode problem.
// ! you can find the problem at this link: https://leetcode.com/problems/combination-sum-ii/

// ? This is the helper function that do the backtracing logic.
const backtrace = (candidates: number[], target: number, ans: number[][], temp: number[], start) => {
  if (target === 0) {
    ans.push([...temp]);
    return;
  }

  for (let i = start; i < candidates.length && target >= candidates[i]; i++) {
    if (i !== start && candidates[i] === candidates[i - 1]) continue;
    temp.push(candidates[i]);
    backtrace(candidates, target - candidates[i], ans, temp, i + 1);
    temp.pop();
  }
}

// ? The main function for traversing the subsets.
function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  const ans: number[][] = [];
  const temp: number[] = [];

  backtrace(candidates, target, ans, temp, 0);
  return ans;
};
