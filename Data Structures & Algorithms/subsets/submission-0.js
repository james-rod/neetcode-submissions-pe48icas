class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let result = []
        let n = nums.length


        function backtracking(currIdx, currSubset){
            result.push([...currSubset])

            for(let i = currIdx; i < n; i++){
                currSubset.push(nums[i])
                backtracking(i + 1, currSubset)
                currSubset.pop()
            }
        }
        backtracking(0, [])
        return result
    }
}
