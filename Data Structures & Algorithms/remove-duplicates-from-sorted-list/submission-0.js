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
     * @return {ListNode}
     */
    deleteDuplicates(head) {
        if(!head) return null

        let curr = head

        while(curr && curr.next){
            if(curr.val == curr.next.val){
                curr.next = curr.next.next
            } else{
                curr = curr.next
            }
        }
        return head
    }
}
