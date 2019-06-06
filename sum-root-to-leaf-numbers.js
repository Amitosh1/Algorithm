/** https://leetcode.com/problems/sum-root-to-leaf-numbers/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    var rootToleafs = 0;
    function solve(elem,sum){
        if(!elem.left && !elem.right){
           // console.log(rootToleafs, sum*10+elem.val);
           rootToleafs = rootToleafs+sum*10+elem.val;
        }else{
            var currSum = sum*10+elem.val;
            elem.left && solve(elem.left,currSum);
            elem.right && solve(elem.right,currSum);
        }
    }
    root && solve(root,0);
    //console.log(rootToleafs);
    return rootToleafs;
    
};