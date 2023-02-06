function shuffleOne(nums: number[], n: number): number[] {
  const ans: number[] = [];

  for (let i = 0; i < n; i++) {
    ans.push(nums.slice(0, n)[i]);
    ans.push(nums.slice(n, n * 2)[i]);
  }

  return ans;
}

function shuffleTwo(nums: number[], n: number): number[] {
  const ans: number[] = [];

  for (let i = 0; i < n; i++) {
    ans.push(nums[i], nums[n + i]);
  }

  return ans;
}
