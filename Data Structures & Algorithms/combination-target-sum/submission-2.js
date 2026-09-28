class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = []

        function dfs(pointer, curr, total){
            if(total === target){
            res.push([...curr])
            return
        }

        if(pointer >= nums.length || total > target){
            return null
        }

        curr.push(nums[pointer])
        dfs(pointer, curr, total + nums[pointer])
        curr.pop()

        dfs(pointer + 1, curr, total)
        }

        dfs(0, [], 0)

        return res

    }

    
}
