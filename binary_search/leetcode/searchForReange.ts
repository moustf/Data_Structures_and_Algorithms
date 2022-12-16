function searchRange(nums: number[], target: number): number[] {
  let left = 0;
  let right = nums.length - 1;
  let result = [-1, -1];

  // Finding the left position.
  while (left + 1 < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      right = mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  if (nums[left] === target) result[0] = left;
  else if (nums[right] === target) result[0] = right;

  // Finding the right position.
  left = 0;
  right = nums.length - 1;
  while (left + 1 < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      left = mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  if (nums[right] === target) result[1] = right;
  else if (nums[left] === target) result[1] = left;

  return result;
};