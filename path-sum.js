/** https://leetcode.com/problems/path-sum/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (!root)
        return false;
    var isSolved = false;
    function solve(elem, sum) {
        if (isSolved)
            return true;
         // console.log(elem.val,sum);
        if (!elem.left && !elem.right) {
             // console.log(elem.val,sum)
            isSolved = (sum === elem.val);
            return;
        } else {
            if(((sum<0 && elem.val<0)  && elem.val>sum) || ((sum>0 && elem.val>0) && elem.val < sum) || (sum>0 && elem.val<0) ||!(sum>0 && elem.val<0)) {
                elem.left && solve(elem.left, sum - elem.val);
                !isSolved && elem.right && solve(elem.right, sum - elem.val);
            }
        }

    }
    solve(root,sum);
    return isSolved;

};
