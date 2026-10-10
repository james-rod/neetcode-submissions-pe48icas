class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let res = 0
        for(let i = 0; i < s.length; i++){
            res += this.countPali(s, i, i)
            res += this.countPali(s, i, i + 1)
        }
        return res
    }

    countPali(s, left, right){
        let res = 0
        while(left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)){
            res++
            left--
            right++
        }
        return res
    }

}
