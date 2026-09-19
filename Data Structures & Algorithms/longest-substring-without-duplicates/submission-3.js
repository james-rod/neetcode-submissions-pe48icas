class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0 
        let res = 0;
        let hashSet = new Set()

        for(let right = 0; right < s.length; right++){
            while(hashSet.has(s[right])){
                hashSet.delete(s[left])
                left++
            }
            hashSet.add(s[right])
            res = Math.max(res, (right - left + 1))
        }
        return res
    }
}
