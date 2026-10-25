class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let hashMap = new Map()

        for(let num of nums){
            hashMap.set(num, (hashMap.get(num) || 0) + 1)
        }

        for(let [key, val] of hashMap.entries()){
            let majorityElement = nums.length / 2

            if(val > majorityElement){
                return key
            }

        }
    }
}
