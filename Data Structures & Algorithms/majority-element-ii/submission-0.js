class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let hashMap = new Map()
        let result = []

        for(let num of nums){
            hashMap.set(num, (hashMap.get(num) || 0) + 1)
        }

        for(let [key, value] of hashMap.entries()){
            if(value > Math.floor(nums.length / 3)){
                result.push(key)
            } 
        }

        return result




    }
}
