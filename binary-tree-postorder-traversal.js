// https://leetcode.com/problems/binary-tree-postorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if (!root)
        return [];
    var solutions = []
      , elements = [root]
    ,elem = root;
    while (elements.length) {
        var elem = elements.pop();
         solutions.push(elem.val);
        if (elem.left) {
            elements.push(elem.left)
        }
                if (elem.right) {
            elements.push(elem.right)
        }
    }
    return solutions.reverse()
};