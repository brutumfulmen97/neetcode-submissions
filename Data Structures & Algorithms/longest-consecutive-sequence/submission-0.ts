class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    _longestConsecutive(nums: number[]): number {
        let res = 0;
        const set = new Set(nums);
        for (let i = 0; i < nums.length; i++) {
            if (!set.has(nums[i] - 1)) {
                let streak = 0;
                let curr = nums[i];
                while (set.has(curr++)) {
                    streak++;
                }
                res = Math.max(streak, res);
            }
        }
        return res;
    }
    longestConsecutive(nums: number[]): number {
        const m = new Map();
        let res = 0;

        nums.forEach(num => {
            if (!m.has(num)) {
                m.set(
                    num,
                    (m.get(num-1) || 0) + (m.get(num+1) || 0) + 1
                )
                m.set(num - (m.get(num-1) || 0), m.get(num))
                m.set(num + (m.get(num+1) || 0), m.get(num))
                res = Math.max(res,m.get(num))
            }
        })

        return res;
    }
}
