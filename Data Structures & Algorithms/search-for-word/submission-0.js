class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let rows = board.length
        let cols = board[0].length
        let visited = new Set()

        function backtracking(r, c, i){
            if(i === word.length) return true;

            if(r < 0 || c < 0 || r >= rows || c >= cols ||
            board[r][c] !== word[i] || visited.has(`${r}, ${c}`)) {
                return false;
            }

            visited.add(`${r}, ${c}`)

            let result = 
            backtracking(r + 1, c, i + 1) ||
            backtracking(r - 1, c , i + 1) ||
            backtracking(r, c + 1, i + 1) || 
            backtracking(r, c - 1, i + 1)

            visited.delete(`${r}, ${c}`)

            return result
        }

        for(let r = 0; r < rows; r++){
            for(let c = 0; c < cols; c++){
                if(backtracking(r, c, 0)){
                    return true
                }
            }
        }
        return false;
    }
}
