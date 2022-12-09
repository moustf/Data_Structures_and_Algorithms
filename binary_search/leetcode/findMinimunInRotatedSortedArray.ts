function findMin(nums: number[]): number {
  const size = nums.length;

  if (nums[size - 1] > nums[0] || size === 1) return nums[0];

  let left = 0;
  let right = size - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    } else if (nums[mid - 1] > nums[mid]) {
      return nums[mid];
    } else if (nums[mid] > nums[0]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};