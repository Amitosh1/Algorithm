/** https://leetcode.com/problems/reorder-list/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(!head) return;
    var elem = head, prev = null, end, iteration = 0;
    while (true) {
        iteration++;
        elem.prev = prev;
        prev = elem;
        if (elem.next) {
            elem = elem.next;
        } else {
            end = elem;
            break;
        }

    }
    iteration = iteration / 2 | 0;
    elem = head;
    var nxt, previous;
    while (iteration-- >= 0) {
        if (previous)
            previous.next = elem;
        nxt = elem.next;
        prev = end.prev;
        elem.next = end;
        if (iteration === -1) {
            elem.next = undefined;
        }
        previous = end;
        elem.prev = undefined;
        end.prev = undefined;
        elem = nxt;
        end = prev;

    }
};
