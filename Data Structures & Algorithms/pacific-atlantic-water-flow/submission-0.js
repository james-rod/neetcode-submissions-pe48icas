class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let rows = heights.length
        let cols = heights[0].length
        let pacific = new Set()
        let atlantic = new Set()
        let directions = [
            [1,0],
            [-1,0],
            [0, 1],
            [0,-1],
        ]
        let result = []

        function helper(r, c, visited, prevHeight){
            if(r < 0 || c < 0 || r >= rows || c >= cols ||
            heights[r][c] < prevHeight || visited.has(`${r}, ${c}`)){
                return
            }

            visited.add(`${r}, ${c}`)

            for(let [dr, dc] of directions){
                let nr = r + dr
                let nc = c + dc

                helper(nr, nc, visited, heights[r][c])
            }
        }

        for(let r = 0; r < rows; r++){
            helper(r, 0, pacific, heights[r][0])
            helper(r, cols - 1, atlantic, heights[r][cols - 1])
        }

        for(let c = 0; c < cols; c++){
            helper(0, c, pacific, heights[0][c])
            helper(rows - 1, c, atlantic, heights[rows - 1][c])
        }

        for(let r = 0; r < rows; r++){
            for(let c = 0; c < cols; c++){
                if(pacific.has(`${r}, ${c}`) && atlantic.has(`${r}, ${c}`)){
                    result.push([r, c])
                }
            }
        }

        return result

    }

}