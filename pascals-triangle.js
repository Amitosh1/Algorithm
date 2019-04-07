/**
 * https://leetcode.com/problems/pascals-triangle/
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var i = 0;
    var solutions = [];
    while (i < numRows) {
        var rowResult = [];
        var last = solutions[i - 1];
        if (!last) {
            solutions.push([1]);
        } else {
            var j = 0;
            while (j <= i) {
                rowResult.push((last[j] || 0) + (last[j - 1] || 0));
                j++;
            }
            solutions.push(rowResult.slice(0));
        }
        i++;
        rowResult = [];
    }
    return solutions;
};
