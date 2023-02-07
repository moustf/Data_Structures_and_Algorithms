// ! Brute Force. Time Out in some scenarios!!
// ? Time Complexity: O(n^3), Space Complexity: O(n).
function totalFruitOne(fruits: number[]): number {
  let [max, n] = [0, fruits.length];

  for (let l = 0; l < n; l++) {
    const lNum = fruits[l];
    for (let r = l; r < n; r++) {
      const basket = new Set(fruits.slice(l, r + 1));

      // ? If the length of the basket is no longer than 2, update max with the subarray length.
      if (basket.size <= 2) max = Math.max(max, r - l + 1);
    }
  }

  return max;
};
