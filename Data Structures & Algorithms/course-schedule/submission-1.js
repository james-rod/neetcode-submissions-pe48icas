class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let prerMap = new Map()

        for(let i = 0; i < numCourses; i++){
            prerMap.set(i, [])
        }

        for(let [crs, pre] of prerequisites){
            prerMap.get(crs).push(pre)
        }

        let visited = new Set()

        function dfsHelper(crs){
            if(visited.has(crs)) return false;
        
            if(prerMap.get(crs).length === 0) return true;

            visited.add(crs)

            for(let pre of prerMap.get(crs)){
                if(!dfsHelper(pre)){
                    return false;
                }
            }

            visited.delete(crs)
            prerMap.set(crs, [])

            return true
        }

        for(let c = 0; c < numCourses; c++){
            if(!dfsHelper(c)) return false;
        }

        return true
    }
}
