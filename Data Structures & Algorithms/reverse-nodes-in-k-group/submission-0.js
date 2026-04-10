/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let dummyNode = new ListNode(0, head)
        let groupPrev = dummyNode

        while(true){
            let kth = this.getkth(groupPrev, k)
            if(!kth){
                break;
            }
            let groupNext = kth.next
            let prev = groupNext
            let curr = groupPrev.next
            let nextGroupPrev = groupPrev.next

            while(curr != groupNext){
                let temp = curr.next
                curr.next = prev
                prev = curr
                curr = temp
            }
            
            groupPrev.next = kth
            groupPrev = nextGroupPrev
        }
        return dummyNode.next
    }

    getkth(curr, k){
        while(curr && k > 0){
            curr = curr.next
            k--
        }
        return curr
    }
}
