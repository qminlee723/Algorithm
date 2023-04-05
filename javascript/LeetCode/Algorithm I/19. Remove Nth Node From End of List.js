// Given the head of a linked list,
// remove the nth node from the end of the list and return its head.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// head = [1,2,3,4,5], n = 2
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(null); // [0]
  dummy.next = head; // dummy: [0,1,2,3,4,5]

  let slow = dummy; // [0,1,2,3,4,5]
  let fast = head; // [1,2,3,4,5]

  // fast를 n만큼 앞으로 옮김
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  // fast: [3,4,5] n만큼 앞으로 간 것을 알 수 있음

  // fast가 노드에서 완전히 이탈할 때 까지
  // fast와 slow를 같은 속도로 움직임
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  } // slow: [3,4,5], fast: []

  // dummy.next: [1,2,3,4,5]
  slow.next = slow.next.next; // slow.next.next: [5]
  // dummy.next: [1,2,3,5]... 왜냐하면 dummy.next가 head를 바라보고있음!
  // 블로그 참조해주세용
  return dummy.next;
};

Console;
