/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
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
            return elem ;
        }
    }
    return solve(nums, 0, nums.length - 1, undefined) || null;
};
