/**
 * https://leetcode.com/problems/subsets/submissions/
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
result = [];
    function solve(nums,pattern){
        if(nums.length ===0){
            result.push(pattern);
            return
        }else{
            var elem = nums.pop();
            pattern.push(elem);
            solve(nums.slice(0),pattern.slice(0));
            pattern.pop();
            solve(nums.slice(0),pattern.slice(0))
        }
    }
    solve(nums,[]);
    return result;
    
};