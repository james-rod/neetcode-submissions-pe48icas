class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {string}
     */
    removeDuplicates(s, k) {
        let stack = [] // [char, count]

        for(let c of s){
            if(stack.length && stack[stack.length - 1][0] == c){ // stack is not empty && top character matches the current c
                stack[stack.length - 1][1]++
            } else {
                stack.push([c, 1])
            }

            if(stack[stack.length - 1][1] == k){ // If the top character matches with k, we pop from the stack
                stack.pop()
            }
        }

        let result = "";

        for(let [char, count] of stack){ 
            result += char.repeat(count) // we update the result by repeating each character by its count
        }

        return result

    }
}
