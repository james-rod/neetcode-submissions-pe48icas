class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        for(let token of tokens){
            if(token === "+"){
                stack.push(stack.pop() + stack.pop())
            } else if(token === "-"){
                let val1 = stack.pop()
                let val2 = stack.pop()
                stack.push(val2 - val1)
            } else if(token === "*"){
                stack.push(stack.pop() * stack.pop())
            } else if(token === "/"){
                let val1 = stack.pop()
                let val2 = stack.pop()
                stack.push(Math.trunc(val2 / val1))
            } else{
                stack.push(Number(token))
            }
        }
        return stack[0]
    }
}
