/**
 * //  https://leetcode.com/problems/populating-next-right-pointers-in-each-node-II/ Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    levels = {};
    function solve(elem, level) {
        var curr = levels[level];
        if (curr) {
            curr.pop().next = elem;
            curr.push(elem);
        } else {
            levels[level] = [elem];
        }
        elem.left && solve(elem.left, level + 1);
        elem.right && solve(elem.right, level + 1);
    }
    root && solve(root, 0);
    return root;
};
