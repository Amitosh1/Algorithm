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
var preorderTraversal = function(root) {
    if (!root)
        return [];
    var solutions = []
      , elements = [root];
    while (elements.length) {
        var elem = elements.pop();
        solutions.push(elem.val);
        if (elem.right) {
            elements.push(elem.right)
        }
        if (elem.left) {
            elements.push(elem.left)
        }
    }
    return solutions
};
