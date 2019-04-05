/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    var sortedArr = [];
    while (head) {
        sortedArr.push(head.val);
        head = head.next;
    }
    function solve(nums, start, end, parent, dir) {
        if (start > end)
            return;
        var pos = start + ((end - start) / 2) | 0;
        var elem = new TreeNode(nums[pos]);
        if (parent) {
            dir === 'LEFT' ? (parent.left = elem) : (parent.right = elem);
        }
        solve(nums, start, pos - 1, elem, 'LEFT');
        solve(nums, pos + 1, end, elem, 'RIGHT');
        if (!parent) {
            return elem;
        }
    }
    return solve(sortedArr, 0, sortedArr.length - 1, undefined) || null;

};
