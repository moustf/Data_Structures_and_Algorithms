/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycleOne(head: ListNode | null): boolean {
  // ? This a famous technique called slow fast technique.
  // ? Slow pointers travels the linked list one pointer at a time, and the fast pointer travels two steps at a time.
  let [slow, fast] = [head, head];

  // ? Ideally when the the list is cycle, the fast will reach the end soon and keep the check
  // ? running, so suppose the third node in a list of 10 node size is at the pos index,
  // ? The node will reach the it at the third turn of the loop.
  while (slow && fast?.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
          return true;
      }
  }

  return false;
};