function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);

    const res: number[][] = [];

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let [l, r] = [i + 1, nums.length - 1];
        while (r > l) {
            let threeSum = nums[i] + nums[l] + nums[r];
            if (threeSum > 0) {
                r -= 1;
            } else if (threeSum < 0) {
                l += 1;
            } else {
                res.push([nums[i], nums[l], nums[r]]);
                l += 1;
                while (nums[l] === nums[l - 1] && l < r) {
                    l += 1;
                }
            }
        }
    }

    return res;
};