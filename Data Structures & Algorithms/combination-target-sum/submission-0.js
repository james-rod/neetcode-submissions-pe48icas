class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result = []

        function backtracking(pointer, current, total){
            if(total == target) {
                result.push([...current])
                return
            }

            if(pointer >= nums.length || total > target){
                return;
            }

            current.push(nums[pointer])
            backtracking(pointer, current, total + nums[pointer])
            current.pop()
            backtracking(pointer + 1, current, total)
        }
        backtracking(0, [], 0)
        return result
    }
}
