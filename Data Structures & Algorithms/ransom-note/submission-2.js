class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {
        let hashMap = new Map()

        for(let char of magazine){
            hashMap.set(char, (hashMap.get(char) || 0 ) + 1)
        }

        for(let char of ransomNote){
            if(!hashMap.has(char) || hashMap.get(char) == 0){
                return false
            }

            hashMap.set(char, hashMap.get(char) - 1)
        }
        return true
    }
}
