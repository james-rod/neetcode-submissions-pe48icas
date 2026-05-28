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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return [];
        let queue = []
        let result = []

        queue.push(root)

        while(queue.length > 0){
            let queueLevel = []
            let queueLength = queue.length
            for(let i = 0; i < queueLength; i++){
                let curr = queue.shift()
                queueLevel.push(curr.val)
                if(curr.left) queue.push(curr.left);
                if(curr.right) queue.push(curr.right)
            }
            result.push(queueLevel)
        }
        return result
        
    }
}
