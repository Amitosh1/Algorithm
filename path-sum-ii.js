/**
 * https://leetcode.com/problems/path-sum-ii/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if (!root)
        return [];
    var solutions = [];
    function solve(elem, sum, pattern) {
        if (!elem.left && !elem.right) {
            if (sum === elem.val) {
                pattern.push(elem.val);
                solutions.push(pattern.slice(0));
                pattern.pop();
            }
        } else {
            if (((sum < 0 && elem.val < 0) && elem.val > sum) || ((sum > 0 && elem.val > 0) && elem.val < sum) || (sum > 0 && elem.val < 0) || !(sum > 0 && elem.val < 0)) {
                pattern.push(elem.val);
                elem.left && solve(elem.left, sum - elem.val,pattern);
                elem.right && solve(elem.right, sum - elem.val,pattern);
                pattern.pop();

            }
        }

    }
    solve(root, sum, []);
    return solutions;
};
