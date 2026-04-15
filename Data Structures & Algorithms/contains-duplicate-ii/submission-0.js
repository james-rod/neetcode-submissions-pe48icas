class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let window = new Set()
        let left = 0

        for(let right = 0; right < nums.length; right++){
            if(right - left > k){ //window size R - L exceeds k
                window.delete(nums[left]) 
                left++
            }

            if(window.has(nums[right])){ //If a new element already exists in the set, we found a duplicate within distance k.
                return true
            }
            window.add(nums[right])
        }
        return false
    }
}
