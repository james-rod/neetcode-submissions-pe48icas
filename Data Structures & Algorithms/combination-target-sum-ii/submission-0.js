class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a, b) => a - b)
        let res = []
        
        function backtracking(index, path, currSum){
            if(currSum === target){
                res.push([...path]) // Each Level
                return;
            }

            for(let i = index; i < candidates.length; i++){
                if(i > index && candidates[i] === candidates[i - 1]){
                    continue;
                }

                if(currSum + candidates[i] > target){
                    break;
                }

                path.push(candidates[i])
                backtracking(i + 1, path, currSum + candidates[i])
                path.pop()
            }
        }

        backtracking(0, [], 0)
        return res

    }
}
