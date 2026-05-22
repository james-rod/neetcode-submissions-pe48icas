class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let hashSet = new Set(nums)
        let result = 0

        for(let num of hashSet){
            if(!hashSet.has(num - 1)){
                let length = 1

                while(hashSet.has(num + length)){
                    length++
                }

                result = Math.max(result, length)
            }
        }
        return result
    }
}
