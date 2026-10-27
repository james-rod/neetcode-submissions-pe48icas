class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    findMinArrowShots(points) {
        points.sort((a,b) => a[1] - b[1])
        let endpoint = points[0][1]
        let arrow = 1

        for(let [start, end] of points){
            if(start > endpoint){
                arrow++
                endpoint = end
            }
            
        }
        return arrow
    }
}
