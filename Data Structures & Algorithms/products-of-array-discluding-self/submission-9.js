class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length
        let result = new Array(n).fill(1)

        for(let i = 1; i < n; i++){
            result[i] = result[i - 1] * nums[i - 1]
        }

        let postfix = 1;

        for(let j = n - 1; j >= 0; j--){
            result[j] *= postfix
            postfix *= nums[j]
        }

        return result



    }
}
