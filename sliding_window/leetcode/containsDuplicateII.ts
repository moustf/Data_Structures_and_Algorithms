function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const store: Record<number, number> = {};
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] in store && (i - store[nums[i]]) <= k) {
          console.log(nums[i]);
          return true;
      } else {
          store[nums[i]] = i;
      }
  }

  return false;
};
