class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    countElements(arr) {
        let hashMap = new Map()
        let counter = 0

        for(let i = 0; i < arr.length; i++){
            hashMap.set(arr[i], (hashMap.get(arr[i]) || 0) + 1)
        }

        for(let num of arr){
            let x = num + 1

            if(hashMap.has(x)) counter++
        }
        return counter;

    }
}
