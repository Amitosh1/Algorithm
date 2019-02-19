/**
*https://leetcode.com/problems/spiral-matrix
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var rows = matrix.length;
    if (rows === 0)
        return [];
    var col = matrix[0].length;
    var dir = 'RIGHT';
    var solution = [];
    var end = false;
    var i = 0;
    j = 0;
    count = rows * col;
    //solution.push(matrix[i][j]);

    while (count > 0) {
        if (dir === 'RIGHT') {
            if (!matrix[i] || (matrix[i][j] !== 0 && !matrix[i][j])) {
                dir = 'DOWN';
                j--;
                i++;
            } else {
                count--;
                solution.push(matrix[i][j]);
                matrix[i][j++] = undefined;
            }

        } else if (dir === 'DOWN') {
            if (!matrix[i] || (matrix[i][j] !== 0 && !matrix[i][j])) {
                dir = 'LEFT';
                i--;
                j--;
            } else {
                count--;
                solution.push(matrix[i][j]);
                matrix[i++][j] = undefined;
            }

        } else if (dir === 'LEFT') {
            if (!matrix[i] || (matrix[i][j] !== 0 && !matrix[i][j])) {
                dir = 'UP';
                j++;
                i--;
            } else {
                count--;
                solution.push(matrix[i][j]);
                matrix[i][j--] = undefined;
            }
        } else if (dir === 'UP') {
            if (!matrix[i] || (matrix[i][j] !== 0 && !matrix[i][j])) {
                dir = 'RIGHT';
                i++;
                j++;
            } else {
                count--;
                solution.push(matrix[i][j]);
                matrix[i--][j] = undefined;
            }
        }
    }

    return solution;

};
