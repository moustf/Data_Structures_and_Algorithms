const td = (
  prefixArr: number[],
  numOfPartitions: number,
  startingIndex: number,
  cache: Map<string, number>
): number => {
  if (startingIndex >= prefixArr.length) return 0;
  if (numOfPartitions === 1) {
    // If this is the last partition
    return (
      (prefixArr[prefixArr.length - 1] - (prefixArr[startingIndex - 1] || 0)) /
      (prefixArr.length - startingIndex)
    );
  }

  const key = `${numOfPartitions}-${startingIndex}`;
  if (cache.has(key)) {
    return cache.get(key);
  }

  let result = 0;
  for (let i = startingIndex; i < prefixArr.length; i++) {
    // partitioning, choosing i as end of this partition
    let currentPartition =
      (prefixArr[i] - (prefixArr[startingIndex - 1] || 0)) /
      (i - startingIndex + 1);
    let nextPartition = td(prefixArr, numOfPartitions - 1, i + 1, cache);
    if (nextPartition === 0) continue;
    result = Math.max(result, currentPartition + nextPartition);
  }

  cache.set(key, result);
  return result;
};

const largestSumOfAverages = (nums: number[], k: number): number => {
  const prefixArr = new Array(nums.length).fill(0);

  // ? Storing a prefix sum of nums to find the sum of a sum contiguous subarray in o (1).
  for (let i = 0; i < nums.length; i++) {
    prefixArr[i] = (prefixArr[i - 1] || 0) + nums[i];
  }

  let cache = new Map(); // ? memoization.
  let result = td(prefixArr, k, 0, cache);
  return result;
};
