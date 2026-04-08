class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let hashMap = new Map()
        let result = 0
        let maxCount = 0

        for(let num of nums){
            hashMap.set(num, (hashMap.get(num) || 0) + 1)

            if(hashMap.get(num) > maxCount){
                result = num
                maxCount = hashMap.get(num)
            }
        }
        return result

        
    }
}
