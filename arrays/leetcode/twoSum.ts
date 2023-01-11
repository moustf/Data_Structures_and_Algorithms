function twoSumOne(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
          if (i === j) continue;
          
          if (nums[i] + nums[j] === target){
              return [i, j];
          }
      }
  }
};

function twoSumTwo(nums: number[], target: number): number[] {
  const store: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
      if (store[diff] !== undefined) {
          return [store[diff], i];
      }
      store[nums[i]] = i
  }
  
  return [0, 0];
};
