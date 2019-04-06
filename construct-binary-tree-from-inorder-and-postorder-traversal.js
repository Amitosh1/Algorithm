/**
 * https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (inorder.length !== postorder.length || inorder.length === 0)
        return null;

    var elem = new TreeNode();
    var elem_val = postorder[postorder.length - 1];
    var elem_index = inorder.indexOf(elem_val);
    elem.val = elem_val;
    elem.left = buildTree(inorder.slice(0, elem_index), postorder.slice(0, elem_index));
    elem.right = buildTree(inorder.slice(elem_index + 1), postorder.slice(elem_index, postorder.length - 1))
    return elem;
};
