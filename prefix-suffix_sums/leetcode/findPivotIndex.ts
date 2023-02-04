function pivotIndexOne(nums: number[]): number {
  const sum = nums.reduce((a, b) => a + b);
  let prefixSum = 0;

  for (let i = 0; i <= nums.length; i++) {
    if (prefixSum === sum - prefixSum - nums[i]) return i;
    prefixSum += nums[i];
  }

  return -1;
}

function pivotIndexTwo(nums: number[]): number {
  let sum = nums.reduce((a, b) => a + b);
  let prefixSum = 0;

  for (let i = 0; i <= nums.length; i++) {
    sum -= nums[i];
    if (prefixSum === sum) return i;
    prefixSum += nums[i];
  }

  return -1;
}
