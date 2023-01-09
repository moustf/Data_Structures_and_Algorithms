function containsDuplicateOne(nums: number[]): boolean {
  for (let i = 0; i < nums.length; i++) {
      if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
          return true;
      }
  }

  return false;
};

function containsDuplicateTwo(nums: number[]): boolean {
  const unique = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
      if (unique.has(nums[i])) {
          return true;
      }
      unique.add(nums[i]);
  }

  return false;
};
