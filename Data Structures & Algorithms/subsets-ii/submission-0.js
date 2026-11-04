class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let res = []
        nums.sort((a, b) => a - b)

        function backtracking(index, path){
            res.push([...path])

            for(let i = index; i < nums.length; i++){
                if(i > index && nums[i] === nums[i - 1]) continue;
                path.push(nums[i])
                backtracking(i + 1, path)
                path.pop()
            }
        }
        backtracking(0, [])
        return res
    }
}
