/**
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/ 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length !== inorder.length || preorder.length === 0) {
        return null;
    }
    elem_val = preorder[0];
    var elem = new TreeNode(elem_val);
    var elem_index = inorder.indexOf(elem_val);
    elem.left = buildTree(preorder.slice(1, elem_index + 1), inorder.slice(0, elem_index));
    elem.right = buildTree(preorder.slice(elem_index + 1), inorder.slice(elem_index + 1));
    return elem;
};
