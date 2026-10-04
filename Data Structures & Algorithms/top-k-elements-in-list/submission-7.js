class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let res = []
        let hashMap = new Map()

        for(let num of nums){
            hashMap.set(num, (hashMap.get(num) || 0) + 1)
        }
        let minHeap = new MinPriorityQueue((x) => x[1])

        for(let [num, count] of hashMap.entries()){
            minHeap.enqueue([num, count])
            if(minHeap.size() > k){
                minHeap.dequeue()
            }
        }

        while(minHeap.size() > 0){
            let val = minHeap.dequeue()
            res.push(val[0])
        }

        return res
    }
}
