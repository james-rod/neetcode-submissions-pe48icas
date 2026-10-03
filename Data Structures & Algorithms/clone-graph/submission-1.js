/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        let oldToNew = new Map()
        return this.dfs(node, oldToNew)
    }

    dfs(node, oldToNew){
        if(!node) return null;

        if(oldToNew.has(node)) {
            return oldToNew.get(node)
        }

        let clone = new Node(node.val)
        oldToNew.set(node, clone)

        for(let cloneNeighbor of node.neighbors){
            clone.neighbors.push(this.dfs(cloneNeighbor, oldToNew))
        }
        return clone
    }
}
