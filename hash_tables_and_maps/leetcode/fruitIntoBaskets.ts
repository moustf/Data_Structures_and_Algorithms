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

// ! Optimized Brute Force. Time Out in some scenarios!!
// ? Time Complexity: O(n^2), Space Complexity: O(1).
function totalFruitTwo(fruits: number[]): number {
  let [max, n] = [0, fruits.length];

  for (let l = 0; l < n; l++) {
    const basket = new Set<number>();
    let r = l;

    while (r < n) {
      // ? Early stop. If adding this fuit makes 3 types fo fruit, we should stop the inner loop.
      if (!basket.has(fruits[r]) && basket.size === 2) break;

      // ? Otherwise, update the number of this fruit.
      basket.add(fruits[r]);
      r += 1;
    }

    max = Math.max(max, r - l);
  }

  return max;
};

// ? Time Complexity: O(n), Space Complexity: O(n).
function totalFruitThree(fruits: number[]): number {
  const basket: { [key: number]: number } = {};
  let [l, r] = [0, 0];

  for (const [right, fruit] of Object.entries(fruits)) {
    basket[fruit] = (basket[fruit] || 0) + 1;

    // ? If the current window has more than 2 types fo fruit, we remove one fruit from the
    // ? left index (l) of the window.
    if (Object.keys(basket).length > 2) {
      basket[fruits[l]] -= 1;

      // ? If the number of fruits[l] is 0, remove it from the basket.
      if (basket[fruits[l]] === 0) {
        delete basket[fruits[l]];
      }

      l += 1;
    }
    r = Number(right);
  }

  return r - l + 1;
};
