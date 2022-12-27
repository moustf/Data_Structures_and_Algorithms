function runningSumOne(nums: number[]): number[] {
  let sum = 0;
  return nums.map(((number) => sum += number));
};

function runningSumTwo(nums: number[]): number[] {
  const newArr = nums.slice(0, 1);
  for (let i = 1; i < nums.length; i++) {
    newArr[i] = nums[i] + nums.slice(0, i).reduce((acc, current) => acc + current);
  }
  return newArr;
};

function runningSumThree(nums: number[]): number[] {
  const runningSumArray = [];
  nums.forEach((num, ind) => {
    if (ind === 0) {
      runningSumArray.push(num);
    } else {
      runningSumArray.push(num + nums.slice(0, ind).reduce((acc, current) => acc + current));
    }
  });
  return runningSumArray;
};
