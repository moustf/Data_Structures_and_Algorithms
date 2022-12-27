function countKDifferenceOne(nums: number[], k: number): number {
  return nums.reduce((acc, num, ind) => {
    for (let i = ind; i < nums.length; i++) {
      if (Math.abs(num - nums[i]) === k) ++acc;
    }

    return acc;
  }, 0)
};

function countKDifferenceTwo(nums: number[], k: number): number {
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (Math.abs(nums[i] - nums[j]) === k) {
        res += 1;
      }
    }
  }

  return res;
};
