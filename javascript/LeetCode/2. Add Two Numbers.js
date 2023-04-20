var addTwoNumbers = function (l1, l2) {
  let current = new ListNode(0);
  let head = current;
  let sum = 0;
  let carry = 0;

  while (l1 || l2) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    }

    head.val = sum;

    if (l1 || l2 || carry > 0) {
      head.next = new ListNode(carry);
      head = head.next;
    }

    sum = carry;
    carry = 0;
  }

  return current;
};
