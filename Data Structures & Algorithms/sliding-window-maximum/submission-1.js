class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let n = nums.length
        let output = new Array(n - k + 1)

        let deque = new Deque()
        let left = 0
        let right = 0

        while(right < n){
            while(deque.size() && nums[deque.back()] < nums[right]){
                deque.popBack()
            }
            deque.pushBack(right)

            if(left > deque.front()){
                deque.popFront()
            }

            if(right + 1 >= k){
                output[left] = nums[deque.front()] 
                left++
            }
            right ++
        }

        return output
        
    }
}
