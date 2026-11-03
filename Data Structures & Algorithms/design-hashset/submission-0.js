class MyHashSet {
    constructor() {
        this.res = []
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if(!this.res.includes(key)){
            this.res.push(key)
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let index = this.res.indexOf(key)

        if(index !== -1){
            this.res.splice(index, 1)
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.res.includes(key)
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
