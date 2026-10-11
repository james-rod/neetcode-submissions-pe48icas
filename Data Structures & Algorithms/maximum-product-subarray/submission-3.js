class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let n = nums.length 
        let res = nums[0]
        let prefix = 0 
        let postfix = 0

        for(let i = 0 ; i < n; i++){
            prefix = nums[i] * (prefix === 0 ? 1 : prefix)
            postfix = nums[n - 1 - i] * (postfix === 0 ? 1 : postfix)
            res = Math.max(res, Math.max(prefix, postfix))
        }
        return res === -0 ? 0 : res 

    }
}
