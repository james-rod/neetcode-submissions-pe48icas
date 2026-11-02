class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findErrorNums(nums) {
        let res = [0, 0]
        let n = nums.length
        let count = Array(n + 1).fill(0)

        for(let num of nums){
            count[num]++
        }

        for(let i = 1; i <= n; i++){
            if(count[i] === 0){
                res[1] = i
            } 
            if(count[i] === 2){
                res[0] = i
            }
        }
        return res

    }
}
