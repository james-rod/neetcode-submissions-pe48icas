class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let n = nums.length

        let output = new Array(n - k + 1)
        let q = new Deque()
        let left = 0 , right = 0

        while(right < n){
            while(q.size() && nums[q.back()] < nums[right]){
                q.popBack()
            }
                q.pushBack(right)

                if(left > q.front()){
                    q.popFront()
                }

                if(right + 1 >= k){
                    output[left] = nums[q.front()] 
                    left++
                }
                right++ 
            
        }

        return output


    }
}
