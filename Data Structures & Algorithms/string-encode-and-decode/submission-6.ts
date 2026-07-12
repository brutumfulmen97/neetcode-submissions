class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.join("||||") + `__len${strs.length}` 
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const [res,length] = (str.split("__len"))
        if (parseInt(length) === 0) return [] 
        return res.split("||||")
    }
}
