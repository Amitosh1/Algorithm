// https://leetcode.com/problems/combination-sum/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var results = [];
    function generateCombinations(candidates, target, curr=[]) {
        //console.log('generating combination for===',candidates,target,curr);
        if(target ===0){
            results.push(curr);
            return;
        }else if(target<0){
            curr.pop();
            return
        }
        if (candidates.length === 0) {
            return;
        }
        var elem = candidates.pop();
         generateCombinations(candidates, target, curr.slice(0, curr.length));
         curr.push(elem);
         candidates.push(elem)
         generateCombinations(candidates,target-elem,curr);
        
    }
    generateCombinations(candidates, target);
    return results
};
