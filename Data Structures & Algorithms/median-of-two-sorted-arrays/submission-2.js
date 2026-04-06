class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let a = nums1 , b = nums2
        let total = a.length + b.length
        let half = Math.floor((total + 1) / 2)

        if(b.length < a.length ){
            [a, b] = [b, a]
        }
        
        let left = 0
        let right = a.length 

        while(left <= right){
            let i = Math.floor((left + right) / 2)
            let j = half - i

            let aLeft = i > 0 ? a[i - 1]: Number.MIN_SAFE_INTEGER
            let aRight = i < a.length ? a[i]: Number.MAX_SAFE_INTEGER
            let bLeft = j > 0 ? b[j - 1]: Number.MIN_SAFE_INTEGER
            let bRight = j < b.length ? b[j]: Number.MAX_SAFE_INTEGER

            if(aLeft <= bRight && bLeft <= aRight){
                if(total % 2 !== 0){
                    return Math.max(aLeft, bLeft)
                } 
                return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2
            } else if(aLeft > bRight){
                right = i - 1
            } else{
                left = i + 1
            }
        }
        return -1


    }
}
