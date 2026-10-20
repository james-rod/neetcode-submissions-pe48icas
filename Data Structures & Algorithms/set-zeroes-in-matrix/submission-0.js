class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        let rows = matrix.length
        let cols = matrix[0].length
        let zeroRows = Array(rows).fill(false)
        let zeroCols = Array(cols).fill(false)

        for(let r = 0; r < rows; r++){
            for(let c = 0; c < cols; c++){
                if(matrix[r][c] === 0){
                    zeroRows[r] = true
                    zeroCols[c] = true
                }
            }
        }

        for(let r = 0; r < rows; r++){
            for(let c = 0; c < cols; c++){
                if(zeroRows[r] || zeroCols[c]){
                    matrix[r][c] = 0
                }
            }
        }

    }
}
