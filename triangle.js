/**
 * https://leetcode.com/problems/triangle
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    var len = triangle.length;
    var sums = [[0]];
    function solve(indx, sums) {
        if (triangle[indx]) {
            var i = 0;
            var len = triangle[indx].length;
            var row_Sums = [];
            var prev = sums.pop();
            while (i < len) {
                row_Sums[i] = Math.min(prev[i] !== undefined ? prev[i] : Infinity, prev[i - 1] !== undefined ? prev[i - 1] : Infinity) + triangle[indx][i];
                i++;
            }
            sums.push(row_Sums);
            solve(indx + 1, sums);
        } else {
            return
        }
    }

    solve(0, sums);
    return sums[0].reduce((elem,curr)=>Math.min(elem, curr));

};
