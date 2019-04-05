/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    var solution = {};
    function solve(elem, level) {
        if (!elem)
            return;
        solution[level] = solution[level] || [];
        solution[level].push(elem.val);
        solve(elem.left, level + 1);
        solve(elem.right, level + 1);
    }
    solve(root,0);
    return Object.values(solution).reverse();
    
};
