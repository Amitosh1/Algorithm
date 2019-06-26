/** https://leetcode.com/problems/binary-tree-inorder-traversal/
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
// var inorderTraversal = function(root) {
//     if (!root) return [];
//     var solutions =[];
//     function traverse(elem){
//         if(elem.left){
//             traverse(elem.left);
//         }
//         solutions.push(elem.val);
//         if(elem.right){
//             traverse(elem.right)
//         }
//     }
//     traverse(root);
//     return solutions;
// };

var inorderTraversal = function(root) {
    if (!root) return [];
    var solutions =[],answer =[],curr = root,allDone =false;
    // we check if all elements are touched
        while(!allDone){
            // we reset to true and check this;
            alldone =true;
            // if curr is there push to array,
          curr && solutions.push(curr);
            if(curr && curr.left){
                curr = curr.left;
                allDone=false;
            }else{
                // do not ahve left value pull the element at top print value and check for right;
                elem =solutions.pop();
                answer.push(elem.val);
                if(elem.right){
                    curr = elem.right;
                    allDone=false;
                }else{
                    // if we do not have right element also check if all elemnts are touched if not move ahead and point current pointer to null
                    // to avoid infinite loop
                    allDone = solutions.length===0;
                    curr = null;
                }
            }
        }
    //traverse(root);
    return answer;
};