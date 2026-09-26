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
     * @return {void}
     */
    reorderList(head) {
        if(!head || !head.next) return;
        let slow = head
        let fast = head.next

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next
        } 

        let node1 = head
        let node2 = slow.next
        slow.next = null

        node2 = this.reverselist(node2)

        let dummy = new ListNode(0)
        let curr = dummy

        while(node1 || node2){
            if(node1){
                curr.next = node1
                curr = curr.next 
                node1 = node1.next 
            }
            if(node2){
                curr.next = node2
                curr = curr.next
                node2 = node2.next
            }
        }

    }

    reverselist(head){
        let curr = head
        let prev = null

        while(curr){
            let temp = curr.next 
            curr.next = prev
            prev = curr
            curr = temp
        }
        return prev
    }

}