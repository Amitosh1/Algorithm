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
var maxPathSum = function(root) {
    var max = -Infinity;
    function solve(elem) {
        if (!elem.left && !elem.right) {
            if (elem.val > max) {
                max = elem.val;
                return elem.val;
            }
        }
        var left = (elem.left && solve(elem.left)) || -Infinity;
        var right = (elem.right && solve(elem.right)) || -Infinity;
        var val = elem.val;
        var max_curr = Math.max(val, left, right, val + left, val + right, val + left + right);
        (max_curr > max) && (max = max_curr);
        return Math.max(val + left, val + right, val);
    }
    root && solve(root);
    return max;
};
