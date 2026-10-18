/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        let start = intervals.map((i) => i.start).sort((a,b) => a - b)
        let end = intervals.map((i) => i.end).sort((a,b) => a - b)

        let s = 0
        let e = 0
        let count = 0
        let result = 0

        while(s < intervals.length){
            if(start[s] < end[e]){
                count++
                s++
            } else if(start[s] >= end[e]){
                count--
                e++
            }

            result = Math.max(result, count)
        }
        return result


    }
}
