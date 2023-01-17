function twoSumOne(numbers: number[], target: number): number[] {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i === j) continue;

            if (numbers[i] + numbers[j] === target) return [i + 1, j + 1];
        }
    }
};

// ? ----------------------------------------------------------

const findSum = (nums: number[], target: number, current: number, ind: number): number => {
  for (let i = 0; i < nums.length; i++) {
      if (i === ind) continue;
      if (nums[i] + current === target) {
          return i + 1;
      }
  }

  return -1;
}

function twoSumTwo(numbers: number[], target: number): number[] {
  for (let i = 0; i < numbers.length; i++) {
      const otherInd = findSum(numbers, target, numbers[i], i);
      if (otherInd !== -1) {
          return [i + 1, otherInd];
      }
  }
};

function twoSumThree(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (right > left) {
      let l = numbers[left];
      let r = numbers[right];
      if (l + r === target) {
          return [++left, ++right];
      } else if (l + r > target) {
          right -= 1;
      } else if (l + r < target) {
          left += 1;
      }
  }
};
