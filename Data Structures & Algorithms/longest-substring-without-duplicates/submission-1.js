class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0
        let hashSet = new Set()
        let longestLength = 0
        
        for(let right = 0; right < s.length; right++){
            while(hashSet.has(s[right])){
                hashSet.delete(s[left])
                left++
            }
            hashSet.add(s[right])
            longestLength = Math.max(longestLength, right - left + 1)
        }
        return longestLength
    }
}
