class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let hashSet = new Set(nums)
        let n = nums.length

        for(let i = 0; i <= n; i++){
            if(!hashSet.has(i)){
                return i
            }
        }
    }
}
