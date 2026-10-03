class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if(edges.length > n - 1) return false;

        let adjList = Array.from({length: n}, () => [])

        for(let [u , v] of edges){
            adjList[u].push(v)
            adjList[v].push(u)    
        }
        let visited = new Set()

        function dfs(node, parent){
            if(visited.has(node)) return false;

            visited.add(node)

            for(let neighbor of adjList[node]){
                if(neighbor === parent) continue;
                if(!dfs(neighbor, node)) return false;
            }
            return true;
        }

        return (dfs(0, -1) && visited.size === n) 
        

    }
}
