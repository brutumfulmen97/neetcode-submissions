class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    //[1,2,4,6]
    productExceptSelf(nums: number[]): number[] {
        const len = nums.length;
        const res = Array.from({ length: len }, () => 1);

        for (let i = 1; i < len; i++) {
            res[i] = res[i - 1] * nums[i - 1];
        }


        let postfix = 1;
        for (let i = len - 1; i >= 0; i--) {
            res[i] *= postfix;
            postfix *= nums[i];
        }

        return res;
    }
}
