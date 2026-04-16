class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length
        let cols = matrix[0].length

        let top = 0
        let bottom = rows - 1

        while(top <= bottom){
            let midRow = Math.floor((top + bottom) / 2)
            if(target > matrix[midRow][cols - 1]){
                top = midRow + 1 // target must be a row below the current row
            } else if(target < matrix[midRow][0]){
                bottom = midRow - 1 // target must be a row above the current row
            } else{
                break; // target could be in the middle row (current row)
            }
        }

        if(top > bottom ){
            return false
        }

        let potentialRow = Math.floor((top + bottom) / 2)
        let left = 0
        let right = cols - 1
        while(left <= right){
            let mid = Math.floor((left + right) / 2)
            if(target > matrix[potentialRow][mid]){
                left = mid + 1
            } else if( target < matrix[potentialRow][mid]){
                right = mid - 1
            } else{
                return true
            }
        }
        return false

    }
}