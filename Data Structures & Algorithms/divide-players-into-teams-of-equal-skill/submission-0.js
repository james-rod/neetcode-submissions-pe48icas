class Solution {
    /**
     * @param {number[]} skill
     * @return {number}
     */
    dividePlayers(skill) {
        skill.sort((a, b) => a - b)
        let n = skill.length
        let target = skill[0] + skill[n - 1]
        let answer = 0

        for(let i = 0; i < n / 2; i++){
            if(skill[i] + skill[n - 1 - i] !== target) return -1;
            answer += skill[i] * skill[n - 1 - i]
        }
        return answer
    }
}
