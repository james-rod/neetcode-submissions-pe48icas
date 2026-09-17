/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let left = 1
        let right = n
        let res = 0

        while(left <= right){
            let mid = Math.floor(left +(right - left) / 2)

            res = guess(mid)

            if(res == 0){
                return mid
            } else if(res == -1){
                right = mid - 1
            } else if(res == 1){
                left = mid + 1

            }
            
        }
        return res
}
}