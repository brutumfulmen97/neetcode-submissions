class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    _topKFrequent(nums: number[], k: number): number[] {
        const m = new Map()
        nums.forEach(n => {
            if (m.has(n)) {
                m.set(n, m.get(n) + 1)
            } else {
                m.set(n, 1)
            }
        })

        return [...m.entries()].sort((a,b) => a[1] < b[1] ? 1 : -1).map(v => v[0]).slice(0,k)
    }

    topKFrequent(nums: number[], k: number): number[] {
        const count = {}
        const freq = Array.from({length: nums.length + 1}, () => [])
        console.log(freq)
        nums.forEach(n => { count[n] = (count[n] || 0 ) + 1})
        console.log(count)
        for (const n in count) {
            freq[count[n]].push(parseInt(n))
        }

        console.log(freq)

        const res = []
        for(let i = freq.length - 1; i > 0; i--) {
            for (const n of freq[i]) {
                res.push(n)
                if (res.length === k) {
                    console.log(res)
                    return res
                }
            }
        }

        console.log(freq)
        return []
    }
}
