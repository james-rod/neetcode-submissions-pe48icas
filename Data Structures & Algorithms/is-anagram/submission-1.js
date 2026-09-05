class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        let countS = new Map()
        let countT = new Map()

        for(let i = 0; i < s.length; i++){
            let charS = s[i]
            let charT = t[i]

            countS.set(charS, (countS.get(charS) || 0) + 1)
            countT.set(charT, (countT.get(charT) || 0) + 1)
        }

        for(let [char, count] of countS){
            if(countT.get(char) !== count) return false
        }
        return true
    }
}
