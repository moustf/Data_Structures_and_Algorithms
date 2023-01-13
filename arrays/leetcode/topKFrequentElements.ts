const getMap = (nums: number[], map: Map<number, number> = new Map()): Map<number, number> => {
  for (const num of nums) {
      const count = (map.get(num) || 0) + 1;
      map.set(num, count);
  }

  return map;
}

const getBucket = (nums: number[], map: Map<number, number>): number[][] => {
  const bucket = new Array(nums.length + 1).fill([]).map(() => []);

  for (const [ num, count ] of map.entries()) {
      bucket[count].push(num);
  }
  
  return bucket.reverse();
}

const getTopK = (bucket: number[][], k: number, topK = []): number[] => {
  for (const count of bucket) {
      for (const num of count) {
          if (topK.length === k) break;

          topK.push(num);
      }
  }

  return topK;
}

const topKFrequent = (nums: number[], k: number): number[] => {
  const map = getMap(nums);
  const bucket = getBucket(nums, map);

  return getTopK(bucket, k);    
};