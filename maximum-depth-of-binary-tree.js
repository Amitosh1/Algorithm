/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    var high = 0;
    function solve(elem, level) {
        if (!elem)
            return;
        if (elem && !elem.left && !elem.right) {
            if (level + 1 > high) {
                high = level + 1;
            }
        } else {
            if (elem.left) {
                solve(elem.left, level + 1);
            }
            if (elem.right) {
                solve(elem.right, level + 1);
            }
        }

    }

    solve(root, 0);
    return high;
};
