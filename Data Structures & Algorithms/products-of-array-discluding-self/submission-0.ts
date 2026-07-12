class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */










    productExceptSelf(nums: number[]): number[] {
        let zeroCount = 0
        const pr = nums.reduce((prev,curr) => { if (curr === 0) {zeroCount++; return  prev } else { return curr * prev}}, 1)
        if (zeroCount > 1) {
            return Array.from({length: nums.length}, () => 0)
        }
        return nums.map((n) => {
            if (zeroCount === 1) {
            if (n === 0) {
                return pr
            } else {
                return 0
            }
            } else {
                return pr / n
            }
        })
    }
}
