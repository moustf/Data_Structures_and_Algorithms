function largestSumAfterKNegations(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  let lowestVal = 0;

  for (let i = 0; i < k; i++) {
    if (nums[i] < nums[lowestVal]) lowestVal = i;
    nums[i] < 0 ? nums[i] = nums[i] * -1 : nums[lowestVal] = nums[lowestVal] * -1;
  }

  return nums.reduce((acc, current) => acc + current, 0);
};