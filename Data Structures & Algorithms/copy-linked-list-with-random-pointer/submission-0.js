// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let oldToNew = new Map()
        oldToNew.set(null, null)
        let current = head

        while(current){
            let copy =  new Node(current.val)
            oldToNew.set(current, copy)
            current = current.next
        }

        current = head

        while(current){
            let deepCopy = oldToNew.get(current)
            deepCopy.next = oldToNew.get(current.next)
            deepCopy.random = oldToNew.get(current.random)
            current = current.next
        }
        return oldToNew.get(head)

    }
}
