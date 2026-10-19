class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let hashMap = new Map()
        let res = []

        for(let num of nums){
            hashMap.set(num, (hashMap.get(num) || 0) + 1)
        }

        for(let [key, val] of hashMap.entries()){
            if(val > Math.floor(nums.length/3)){
                res.push(key)
            }
        }
        return res
    }
}
