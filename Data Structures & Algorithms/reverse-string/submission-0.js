class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let stack = []
        for(let c of s){
            stack.push(c)
        }

        let i = 0

        while(stack.length){
            s[i++] = stack.pop()
        }
        
    }
}
