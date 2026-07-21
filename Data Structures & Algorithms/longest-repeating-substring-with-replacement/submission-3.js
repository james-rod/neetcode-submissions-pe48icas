class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let freqCount = new Map()
        let res = 0
        let left = 0
        let maxFreq = 0

        for(let right = 0; right < s.length; right++){
            freqCount.set(s[right], (freqCount.get(s[right]) || 0) + 1)
            maxFreq = Math.max(maxFreq, freqCount.get(s[right]))

            while((right - left + 1) - maxFreq > k){
                freqCount.set(s[left], (freqCount.get(s[left]) || 0) - 1)
                left++
            }
            res = Math.max(res, right - left + 1)
        }
        return res
        
    }
}
