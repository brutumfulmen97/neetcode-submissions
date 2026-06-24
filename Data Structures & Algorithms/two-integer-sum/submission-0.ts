class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const diffs = new Map()
        for (let i = 0; i < nums.length; i++) {
            const diff =  target - nums[i]
            if (diffs.has(nums[i])) {
                return [diffs.get(nums[i]), i]
            }
            diffs.set(diff, i);
        }
        return [-1,-1]
    }
}
