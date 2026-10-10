class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    countElements(arr) {
        let hashSet = new Set(arr)
        let counter = 0

        for(let x of arr){
            if(hashSet.has(x + 1)){
                counter++
            }  
        }
        return counter
    }
}
