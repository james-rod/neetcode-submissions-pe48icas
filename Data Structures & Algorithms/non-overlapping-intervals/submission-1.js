class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a,b) => a[0] - b[0])
        let res = 0
        let prevEnd = intervals[0][1]

        for(let i = 1; i < intervals.length; i++){
            let start = intervals[i][0]
            let end = intervals[i][1]

            if(start >= prevEnd){
                prevEnd = end
            } else{
                res++
                prevEnd = Math.min(prevEnd, end)
            }
        }
        return res

        
    }
}
