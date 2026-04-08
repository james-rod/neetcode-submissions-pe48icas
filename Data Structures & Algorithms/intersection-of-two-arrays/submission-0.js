class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
        let seen = new Set(nums1)

        let result = []

        for(let num of nums2){
            if(seen.has(num)){
                result.push(num)
                seen.delete(num)
                
            }
        }
        return result
    }
}
