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
var levelOrder = function(root) {
    solutions = {};
    function solve(elem, level) {
        if (!elem)
            return;
        if (!solutions[level]) {
            solutions[level] = [elem.val];
        } else {
            solutions[level].push(elem.val);
        }
        if (elem.left) {
            solve(elem.left, level + 1);
        }
        if (elem.right) {
            solve(elem.right, level + 1);
        }
    }
    solve(root, 0);
    // console.log(solutions);
    return Object.values(solutions);

};
