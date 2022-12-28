function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  // We initially need to find the maximum number of flower that can be planted.
  // Each three zeros can plant one flower.
  // At first, if we have two zeros, we can plant at the first slot.
  // At end, if we have two zeros, we can plant the second slot.

  let count = 0;
  const size = flowerbed.length;

  if (flowerbed[0] === 0 && size === 1) {
    count++;
  }

  // Two zeros at first.
  if (flowerbed[0] === 0 && flowerbed[1] === 0) {
    count++;
    flowerbed[0] = 1;
  }

  for (let i = 0; i < size; i++) {
    if (flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
      count++;
      flowerbed[i] = 1;
    }
  }

  // Two zeros at the end.
  if (flowerbed[size - 2] === 0 && flowerbed[size - 1] === 0) {
    count++;
    flowerbed[size - 1] = 1;
  }

  return count >= n;
};