class Solution {
    /**
     * @param {string[]} username
     * @param {number[]} timestamp
     * @param {string[]} website
     * @return {string[]}
     */
    mostVisitedPattern(username, timestamp, website) {
        const visits = username.map((user, i) => ({
            user,
            time: timestamp[i],
            site: website[i]
        }));

        visits.sort((a, b) => a.time - b.time)

        const userSites = new Map()

        for(let visit of visits){
            if(!userSites.has(visit.user)){
                userSites.set(visit.user, [])
            }
            userSites.get(visit.user).push(visit.site)
        }

        const patternCount = new Map()

        for(const sites of userSites.values()){
            const hashSet = new Set()

            for(let i = 0; i < sites.length; i++){
                for(let j = i + 1; j < sites.length; j++){
                    for(let k = j + 1; k < sites.length; k++){
                        const pattern = JSON.stringify([
                            sites[i], sites[j], sites[k]
                        ]);

                        if(hashSet.has(pattern)) continue;

                        hashSet.add(pattern)

                        patternCount.set(
                            pattern,
                            (patternCount.get(pattern) || 0) + 1
                        );
                    }
                }
            }
        }

        let bestPattern = null;
        let bestCount = 0

        for(const [pattern, count] of patternCount){
            if(count > bestCount || 
            (count === bestCount && 
            (bestPattern === null || 
            comparePatterns(
                JSON.parse(pattern), 
                JSON.parse(bestPattern)
                ) < 0))
                ){
                    bestCount = count
                    bestPattern = pattern
                }
        }
        return JSON.parse(bestPattern)
    }
}

function comparePatterns(a, b) {
    for (let i = 0; i < 3; i++) {
        if (a[i] < b[i]) return -1;
        if (a[i] > b[i]) return 1;
    }

    return 0;
}