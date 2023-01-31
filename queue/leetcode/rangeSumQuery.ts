class NumArrayOne {
  private nums: number[];
  constructor(nums: number[]) {
      this.nums = nums;
  }

  sumRange(left: number, right: number): number {
      return this.nums.slice(left, right + 1).reduce((acc, current) => acc + current);
  }
}

class NumArrayTwo { // ? Faster method.
  private res: number[] = [];

  constructor(nums: number[]) {
      this.res.push(0);
      let sum = 0;
      for (const num of nums) {
          sum += num;
          this.res.push(sum);
      }
  }

  sumRange(left: number, right: number): number {
      return this.res[right + 1] - this.res[left];
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
