/* https://leetcode.com/problems/balanced-binary-tree/*/
/**
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
var isBalanced = function(root) {
    if (!root)
        return true;
    var isBalancedTree = true;
    function isElemBalanced(elem) {
        if (!elem)
            return 0;
        if (!isBalancedTree)
            return isBalancedTree;
        var leftHeight = isElemBalanced(elem.left)+1;
        var rightHeight = isElemBalanced(elem.right)+1;
        if (!isBalancedTree || Math.abs(leftHeight - rightHeight) > 1) {
            isBalancedTree = false;
            return
        }else{
            return Math.max(leftHeight,rightHeight);
        }
    }
isElemBalanced(root);
    return isBalancedTree;

};
