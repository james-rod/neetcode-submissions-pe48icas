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

        for(const [num, count] of hashMap.entries()){
            minHeap.enqueue([num, count])
            if(minHeap.size() > k){
                minHeap.dequeue()
            } 
        }

        let res = []

        while(minHeap.size() > 0){
            let value = minHeap.dequeue()
            res.push(value[0])
        }
        return res
    }
}
