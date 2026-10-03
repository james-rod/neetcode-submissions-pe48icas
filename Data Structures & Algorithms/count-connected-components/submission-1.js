class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let adjList = Array.from({length : n}, () => []);
        for(let [u , v] of edges){
            adjList[u].push(v)
            adjList[v].push(u)
        }
        let visited = new Set()

        function dfs(node){
            for(let neighbor of adjList[node]){
                if(!visited.has(neighbor)){
                    visited.add(neighbor)
                    dfs(neighbor)
                }
            }
        }

        let components = 0
        for(let node = 0; node < n; node++){
            if(!visited.has(node)){
                visited.add(node)
                dfs(node)
                components++
            }
                   
        }

        return components
        

    }
}
