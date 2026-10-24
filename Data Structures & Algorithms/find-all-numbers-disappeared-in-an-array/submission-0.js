class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        let res = []
        let hashSet = new Set(nums)

        for(let i = 1; i <= nums.length; i++){
            if(!hashSet.has(i)){
                res.push(i)
            }
        }
        return res



    }
}
