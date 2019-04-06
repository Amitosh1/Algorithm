/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    function solve(elem) {
        var last = elem;
        var left = elem.left;
        var right = elem.right;
        if(left){
            elem.left = null;
            elem.right = left;
            last = solve(left);
        }
        if(right){
            last !== elem && (last.right = right);
             last =  solve(right);
        }
        return last;
    }
    root && solve(root);
};
