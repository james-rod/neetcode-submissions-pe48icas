class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []

        let openToClose = {
            ')' : '(',
            '}' : '{',
            ']' : '['
        }

        for(let c of s){
            if(openToClose[c]){
                if(stack.length > 0 && stack[stack.length - 1] === openToClose[c]){
                    stack.pop()
                } else {
                    return false
                }
            } else {
                stack.push(c)
            }
            
        }
        return stack.length === 0 
    }
}
