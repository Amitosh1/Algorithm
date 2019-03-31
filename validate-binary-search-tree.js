/**
 * https://leetcode.com/problems/validate-binary-search-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    var prev = undefined
      , isInvalid = false;
    function solve(elem) {
        if (!isInvalid) {
            if (!elem) {
                return;
            }
            if (elem.left) {
                solve(elem.left)
            }
            if (elem.val <= prev) {
                isInvalid = true;
            }
            prev = elem.val;
            if (elem.right) {
                solve(elem.right);
            }
        }
    }

    solve(root);
    return !isInvalid;
};
