const search = (nums: number[]): number => {
  let [maxScore, score] = [1, 1];

  for (let i = 1; i < nums.length; i++) {
      const isPrevDuplicate = nums[i - 1] === nums[i];
      if (isPrevDuplicate) continue;

      const isStreak = nums[i] === (nums[i - 1] + 1);
      if (isStreak) {
          score++;
          continue;
      }

      maxScore = Math.max(maxScore, score);
      
      score = 1;
  }

  return Math.max(maxScore, score);
}

const longestConsecutiveOne = (nums: number[]): number => (
  nums.length === 0 ? 0 : search(nums.sort((a, b) => a - b))
);

const longestConsecutiveTwo = (nums: number[]): number => {
  const numsSet = new Set(nums);
  let maxScore = 0;

  for (const num of [...numsSet]) {
      const prev = num - 1;

      if (numsSet.has(prev)) continue;

      let [curr, score] = [num, 1];

      const isStreak = () => numsSet.has(curr + 1);
      while(isStreak()) {
          curr++;
          score++;
      }
      maxScore = Math.max(maxScore, score);
  }

  return maxScore;
};
