var deleteDuplicates = function (head) {
  let current = head;

  while (current) {
    if (current.next !== null && current.val === current.next.val) {
      // ㅇㄹㅁ
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};
