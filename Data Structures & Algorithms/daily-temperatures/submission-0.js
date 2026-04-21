class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = new Array(temperatures.length).fill(0)
        let stack = [] // [temp, pair]

        for(let i = 0; i < temperatures.length; i++){
            while(stack.length > 0 && temperatures[i] > stack[stack.length -1][0]){
                let [stackTop, indexTemp] = stack.pop()
                res[indexTemp] = i - indexTemp
            }
            stack.push([temperatures[i], i])
        }
        return res
    }
}