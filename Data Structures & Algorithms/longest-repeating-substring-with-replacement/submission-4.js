class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let hashMap = new Map()
        let result = 0
        let left = 0

        let maxf = 0

        for(let right = 0; right < s.length; right++){

            hashMap.set(s[right], (hashMap.get(s[right]) || 0) + 1)
            maxf = Math.max(maxf, hashMap.get(s[right]))

            while((right - left + 1) - maxf > k){
                hashMap.set(s[left], (hashMap.get(s[left]) || 0) - 1)
                left++
            }

            result = Math.max(result, (right - left + 1))
            
        }
        return result
    }
}
