class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const m = new Map<string, string[]>();

        for (let s of strs) {
            const count = new Array(26).fill(0);
            for (let c of s) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }
            const key = count.join(',')
            if (!m.has(key)) {
                m.set(key, [])
            }
            m.set(key, [...m.get(key), s])
        }

        return [...m.values()]
    }
}
