/**
 * https://leetcode.com/problems/pascals-triangle-ii/
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0)
        return [1];
    var i = 1;
    var solutions = [[1]];
    while (i <= rowIndex) {
        var rowResult = [];
        var last = solutions.pop();
        var j = 0;
        while (j <= i) {
            rowResult.push((last[j] || 0) + (last[j - 1] || 0));
            j++;
        }
        solutions.push(rowResult.slice(0));
        i++;
        rowResult = [];
    }
    return solutions.pop();
};
