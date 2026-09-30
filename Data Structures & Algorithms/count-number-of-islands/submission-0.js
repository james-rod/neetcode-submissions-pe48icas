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

        function dfs(r, c){
            if(r < 0 || c < 0 || r >= rows || c >= cols ||
            grid[r][c] === '0'||visited.has(`${r}, ${c}`)){
                return;
            }
            let queue = []
            visited.add(`${r}, ${c}`)
            queue.push([r, c])

            while(queue.length > 0){
                let [row, col] = queue.shift()
                let directions = [
                    [1, 0],
                    [-1, 0],
                    [0, 1],
                    [0, -1],
                ]
                for(let [dr, dc] of directions){
                    let newRow = row + dr
                    let newCol = col + dc

                    if(newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols &&
                    grid[newRow][newCol] == "1" && !visited.has(`${newRow}, ${newCol}`)){
                        queue.push([newRow, newCol])
                        visited.add(`${newRow}, ${newCol}`)
                    }
                }

            }
        }

        for(let r = 0; r < rows; r++){
            for(let c = 0; c < cols; c++){
                if(grid[r][c] === '1' && !visited.has(`${r}, ${c}`)){
                    dfs(r, c)
                    islands++
                }
            }
        }
        return islands
    }
}
