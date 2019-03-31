/**
 * https://leetcode.com/problems/symmetric-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    var str = [];
    function solve(elem,pos) {
        if (!elem) {
            return;
        }
        if (elem.left) {
                solve(elem.left,'L');
        }
         str.push([elem.val,!pos ? 'C': pos]);
        if(elem.right){
            solve(elem.right,'R');
        }
    }
    solve(root);
    // console.log(str)
    var len = str.length - 1
      , indx = 0
      , mid = len / 2
      , balanced = true;
    while (indx < mid) {
        var values_same= str[indx][0] === str[len - indx][0];
        var dir = str[indx][1] === 'C' ||(str[indx][1] !== str[len - indx][1]);
        if (!values_same || !dir) {
            return false;
        }
        indx++
    }

    return true;

};
