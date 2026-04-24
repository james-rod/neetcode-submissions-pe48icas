class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t === "") return "";

        let countT = new Map() 
        let window = new Map() // slidingWindow

        for(let char of t){
            countT.set(char, (countT.get(char) || 0) + 1)
        }

        let have = 0
        let need = countT.size

        let result = [-1, -1]
        let resLength = Infinity 
        let left = 0

        for(let right = 0; right < s.length; right++){
            window.set(s[right], (window.get(s[right]) || 0) + 1)
            if(countT.has(s[right]) && window.get(s[right]) === countT.get(s[right])){
                have++
            }
            while(have === need){

                if(right - left + 1 < resLength){
                    resLength = right - left + 1
                    result = [left, right]
                }
                window.set(s[left], window.get(s[left]) - 1)

                if(countT.has(s[left]) && window.get(s[left]) < countT.get(s[left])){
                    have--
                }
                left++
            }
        }


        return resLength === Infinity ? "" : s.slice(result[0], result[1] + 1)
    }
}
