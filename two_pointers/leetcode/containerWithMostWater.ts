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

function maxArea(height: number[]): number {
  let [l, r] = [0, height.length - 1];
  let res = 0;

  while (l < r) {
      let area = (r - l) * Math.min(height[l], height[r]);
      res = Math.max(res, area);
      if (height[r] > height[l]) {
          l += 1;
      } else if (height[r] < height[l]) { // ?  we can omit this.
          r -= 1;
      } else {
          r -= 1;
      }
  }

  return res;
};
