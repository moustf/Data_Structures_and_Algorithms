function maxAreaOne(height: number[]): number {
  // ? Brute Froce -> O (n ** 2).
  let res = 0;

  for (let i = 0; i < height.length; i++) {
      for (let j = 1; j < height.length; j++) {
          let area = (j - i) * Math.min(height[i], height[j]);
          res = Math.max(res, area);
      }
  }

  return res;
};
