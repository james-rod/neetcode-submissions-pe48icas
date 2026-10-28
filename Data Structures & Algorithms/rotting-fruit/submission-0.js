class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let rows = grid.length
        let cols = grid[0].length
        let queue = []
        let directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ]
        let fresh = 0
        let time = 0

        for(let r = 0; r < rows; r++){
            for(let c = 0; c < cols; c++){
                if(grid[r][c] === 1){
                    fresh++
                }
                if(grid[r][c] === 2){
                    queue.push([r, c])
                }
            }
        }

        while(queue.length > 0  && fresh > 0){
            let length = queue.length
            for(let i = 0; i < length; i++){
                let [currRow, currCol] = queue.shift()
                
                for(let [dr, dc] of directions){
                    let row = currRow + dr
                    let col = currCol + dc

                    if(row >= 0 && 
                    col >= 0 && 
                    row < rows && 
                    col < cols &&
                    grid[row][col] === 1 ){
                        grid[row][col] = 2
                        queue.push([row, col])
                        fresh--
                    }
                }
            }
            time++
        }
        return fresh === 0 ? time : -1
    }
}
