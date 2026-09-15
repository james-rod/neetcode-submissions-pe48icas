class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let hashSet = new Set(nums)
        let longestSequence = 0

        for(let num of hashSet){
            if(!hashSet.has(num - 1)){
                let length = 1;

            while(hashSet.has(num + length)){
                length++
            }

            longestSequence = Math.max(longestSequence, length)

            }     
        }
        return longestSequence
    }
}
