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

// ! O (M & N).
function mergeTwoListsOne(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let newList = new ListNode();
  // ? Since the arrays or objects have reference assignment, this will point to the newList directly.
  let tail = newList;

  // ? As long as we have node in list1 and list2, do:
  while (list1 && list2) {
    // ? If the value of the list1's current head is less than the value of the list2's current head, ...
    if (list1.val < list2.val) {
      // ? set the list1's current head as the tails next element.
      tail.next = list1;
      // ? Move list1 one node ahead.
      list1 = list1.next;
      // ? list1.val >= list2.val
    } else {
      // ? Assign the tail next pointer to the list2's current head.
      tail.next = list2;
      // ? Move list2 one node ahead.
      list2 = list2.next;
    }
    // ? Now move the tail pointer to the next after modifying the his next to make it able to continue chaining.
    tail = tail.next;
  }

  // ? If list1 or list2 still has nodes, and since the list is sorted, they will be greater than the tail's las node, so put them at the end.
  if (list1) {
    tail.next = list1;
  }
  if (list2) {
    tail.next = list2;
  }

  return newList.next;
};
