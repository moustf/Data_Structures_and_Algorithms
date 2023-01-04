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

function reverseListOne(head: ListNode | null): ListNode | null {
  // ? The best way to think of recursive call is to divide the problem to subproblems
  // ? 1 -> 2 -> 3 -> 4 -> 5 -> Null
  // ? Instead of reversing the full list, we are going to reverse the list except the first node,
  // ? and so on.

  // ? The base case condition.
  if (!head) return null;

  // ? A variable to maintain the new head.
  let newHead = head;

  // ? If there is still sub list -subproblem-
  if (head.next) {
    newHead = reverseListOne(head.next);
    // ? To keep the recursion running to the last node.
    head.next.next = head;
  }

  // ? Making the next pointer of the head's node points to null.
  head.next = null;
  return newHead;
};
