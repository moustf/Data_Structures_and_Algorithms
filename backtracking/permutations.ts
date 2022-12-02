// ! This is the solution for permutations leetcode problem.
// ! you can find the problem at this link: https://leetcode.com/problems/permutations/

// ? First solution.
const permuteOne = (nums: number[]): number[][] => {
  const ans: number[][] = [];

  const backtrack = (result: number[]): void => {
    if (result.length === nums.length) {
      ans.push([...result]);
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (!result.includes(nums[i])) {
        result.push(nums[i]);
        backtrack(result);
        result.pop();
      }
    }
  }

  backtrack([]);
  return ans;
};

// ? Second solution.
const permuteTwo = (nums: number[]): number[][] => {
  const ans: number[][] = [];

  const backtrack = (i: number, nums): void => {
    if (i === nums.length) {
      ans.push(nums.slice());
      return;
    }

    for (let j = i; j < nums.length; j++) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      backtrack(i + 1, nums);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  backtrack(0, nums);
  return ans;
};
