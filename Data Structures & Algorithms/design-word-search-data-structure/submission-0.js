class TrieNode {
    constructor(){
        this.children = new Map()
        this.matches = false
    }
}
class WordDictionary {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root
        for(let c of word){
            if(!curr.children.has(c)){
                curr.children.set(c, new TrieNode())
            }
            curr = curr.children.get(c)
        }
        curr.matches = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.dfs(this.root, word, 0)
    }

    dfs(node, word, index){
        if(index === word.length) return node.matches;

        const char = word[index]
        if(char === "."){
            for(let child of node.children.values()){
                if(this.dfs(child, word, index + 1)) return true
            }
            return false;
        }
        const nextNode = node.children.get(char)
        return nextNode ? this.dfs(nextNode, word, index + 1) : false
    }
}
