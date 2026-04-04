class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hashMap = new Map()

        for(let num of nums){
            hashMap.set(num, (hashMap.get(num) || 0) + 1)
        }

        let minHeap = new MinPriorityQueue((x) => x[1])

        for(let [freq, num] of hashMap.entries()){
            minHeap.enqueue([freq, num])
            if(minHeap.size() >  k ){
                minHeap.dequeue()
            }
        }

        let result = []

        while(minHeap.size() > 0){
            let val = minHeap.dequeue()
            result.push(val[0])
        }
        return result
        


        
    }
}
