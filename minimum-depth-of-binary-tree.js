/**
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/submissions/
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
var minDepth = function(root,start=true) {
    if(!root) return 0;
    var left = minDepth(root.left)+1;
    var right = minDepth(root.right)+1;
    if(start && (left ===1 || right ===1)){
        return Math.max(left,right);
    }
    return Math.min(left,right);
};