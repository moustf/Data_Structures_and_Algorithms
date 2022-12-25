function findPeakElementOne(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

function findPeakElementTwo(nums: number[]): number {
  if (nums.length === 1) return 0;

  const size = nums.length;

  if (nums[0] > nums[1]) return 0;
  if (nums[size - 1] > nums[size - 2]) return size - 1;

  let left = 1;
  let right = size - 2;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) {
      return mid;
    } else if (nums[mid] < nums[mid + 1]) {
      left = mid + 1
    } else if (nums[mid] < nums[mid - 1]) {
      right = mid - 1;
    }
  }

  return -1;
};

const findPeakElementThree = (nums: number[]): number => nums.indexOf(Math.max(...nums));
