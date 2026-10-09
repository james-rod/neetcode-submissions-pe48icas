class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let resIndex = 0
        let resLength = 0;

        for(let i = 0; i < s.length; i++){
            let left = i
            let right = i

            while(left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)){
                if(right - left + 1 > resLength){
                    resIndex = left
                    resLength = right - left + 1
                }
                left--
                right++
            }

            left = i
            right = i + 1

            while(left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)){
                if(right - left + 1 > resLength){
                    resIndex = left
                    resLength = right - left + 1
                }
                left--
                right++
            }

        }
        return s.substring(resIndex, resIndex + resLength)
    }
}
