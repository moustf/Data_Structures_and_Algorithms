function productExceptSelfOne(nums: number[]): number[] {
  const res: number[] = [];
  let prefix = 1;
  let postfix = 1

  // ? First we generate the product of all the elements that come before the current element and store the result
  // ? in the res array.
  for (let i = 0; i < nums.length; i++) {
      res[i] = prefix;
      prefix *= nums[i];
  }

  // ? Here we generate the product of all the elements after the current index then multiply the result with the
  // ? values in the ith position of the res array and finally store the final result in the ith index of the res array.
  for (let i = nums.length - 2; i >= 0; i--) {
      postfix *= nums[i + 1];
      res[i] *= postfix;
  }

  return res;
};

// ! Won't work. Time out issues.

function productExceptSelfTwo(nums: number[]): number[] {
  const res: number[] = [];

  for (let i = 0; i < nums.length; i++) {
      const prod = nums.filter((num, ind) => ind !== i).reduce((a, b) => a * b);
      res.push(prod);
  }

  return res;
};
