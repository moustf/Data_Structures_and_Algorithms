function maxProfitOne(prices: number[]): number {
  let min = prices[0];
  let max = min;
  let val = 0
  
  for (let i = 0; i < prices.length; i++) {
      if (i !== prices.length - 1 && prices[i] <= min) {
          min = prices[i];
          max = prices[i];
      } else if (prices[i] >= max) {
          max = prices[i];
      }
      val = Math.max(max - min, val);
  }

  return val;
};

function maxProfitTwo(prices: number[]): number {
  let [l, r, val] = [0, 1, 0];

  while (r <= prices.length - 1){
      const canSlide = prices[r] <= prices[l];
      if (canSlide) l = r;

      const window = prices[r] - prices[l];

      val = Math.max(val, window);
      r += 1;
  }

  return val;
};
