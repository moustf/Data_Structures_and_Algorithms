function jump(nums: number[]): number {
  const n = nums.length;
  let max = 0;
  let current = 0;
  let jumps = 0;

  if (n === 1) return 0

  for (let i = 0; i < n; i++) {
    max = Math.max(max, nums[i] + i);
    if (max >= n - 1) {
      return jumps + 1;
    } else if (current === i) {
      current = max;
      jumps++;
    }
  }

  return -1;
};