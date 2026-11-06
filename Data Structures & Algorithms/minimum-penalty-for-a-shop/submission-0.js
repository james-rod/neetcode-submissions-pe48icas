class Solution {
    /**
     * @param {string} customers
     * @return {number}
     */
    bestClosingTime(customers) {
        let res = 0
        let minPenalty = 0
        let penalty = 0

        for(let i = 0; i < customers.length; i++){
            penalty += customers[i] == "Y" ? 1 : -1;

            if(penalty > minPenalty){
                minPenalty = penalty
                res = i + 1
            }
        }
        return res
    }
}
