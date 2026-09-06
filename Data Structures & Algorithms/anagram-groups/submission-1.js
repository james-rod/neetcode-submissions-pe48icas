class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hashMap = new Map()

        for(let s of strs){
            let count = new Array(26).fill(0);

            for(let c of s){
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
            }
            let key = count.join(',')

            if(!hashMap.has(key)){
                hashMap.set(key, [])
            }

            hashMap.get(key).push(s)
        }
        return Array.from(hashMap.values())
    }
}
