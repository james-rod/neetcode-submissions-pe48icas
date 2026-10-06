class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let rows = grid.length
        let cols = grid[0].length
        let visited = new Set()
        let islands = 0
        let directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ]

        function helper(r, c){
            if(r < 0 || c < 0 || r >= rows || c >= cols ||
            grid[r][c] == '0' || visited.has(`${r}, ${c}`)) {
                return;
            }

            visited.add(`${r}, ${c}`)

            for(let [dr, dc] of directions){
                helper(r + dr, c + dc)
            }
        }

        for(let r = 0; r < rows; r++){
            for(let c = 0; c < cols; c++){
                if(grid[r][c] === '1' && !visited.has(`${r}, ${c}`)){
                    helper(r, c)
                    islands++
                }
            }
        }
        return islands

        
    }
}
