const search = (nums: number[], target: number): number => {
  // ? The left and right indexes that present the search space.
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    // ? The mid variable which we will split the search space upon it, or compare it to the target.
    let mid = left + Math.floor((right - left) / 2);

    // ? Since the array is sorted, if the number in the middle is equal to the target element, return
    // ? it's position, or if nums[mis] is smaller than the target, this means the element is in the right
    // ? half, otherwise, the element is in the left half.
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }

  // ? If the element doesn't exist, return -1 as a not found value.
  return -1;
};