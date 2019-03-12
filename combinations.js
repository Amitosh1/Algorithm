/**
 * https://leetcode.com/problems/combinations/
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var nums = new Array(n).fill().map((a,i)=>i + 1);
    results = [];
    function solve(nums, length, pattern) {
        if (nums.length < length) {
            return;
        } else if (length === 0) {
            results.push(pattern.slice(0));
        } else {
            var elem = nums.pop();
            pattern.push(elem);
            // solving assuming that the number should be there
            solve(nums.slice(0), length - 1, pattern);
            // solving assuming numer should not be there
            pattern.pop();
            solve(nums.slice(0), length, pattern)
        }
    }
    solve(nums, k, []);
    return results;
};
