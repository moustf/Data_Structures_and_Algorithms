function search(nums: number[], target: number): number {
  const newNums = [...nums].sort((a, b) => a - b);
  console.log(newNums);

  let left = 0;
  let right = nums.length - 1;

  while (right >= left) {
    let mid = left + Math.floor((right - left) / 2)
    console.log(mid);

    if (newNums[mid] === target) return nums.indexOf(target);
    else if (newNums[mid] < target) left = mid + 1;
    else if (newNums[mid] > target) right = mid - 1;
  }

  return -1;
};
