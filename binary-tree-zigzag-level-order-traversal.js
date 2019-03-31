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
var zigzagLevelOrder = function(root) {
    var solutions = {};
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

    return Object.keys(solutions).map(key=>{
        if (key % 2 === 0) {
            return solutions[key];
        } else {
            return solutions[key].reverse();
        }
    }
    )

};
