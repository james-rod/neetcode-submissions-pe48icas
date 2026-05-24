/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return []
        let result = []
        let queue = []

        queue.push(root)
        while(queue.length > 0){
            let currLength = queue.length
            for(let i = 0; i < currLength; i++){
                let node = queue.shift()
                if(i == currLength - 1){
                    result.push(node.val)
                }
                if(node.left !== null) queue.push(node.left)
                if(node.right !== null) queue.push(node.right)
            }
        }
        return result

    }

}