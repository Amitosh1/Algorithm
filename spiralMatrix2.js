/**
 * @param {number} n
 * @return {number[][]}
 */

var generateMatrix = function(n) {

    var count = 1
      , total = n * n
    direction = 'RIGHT',
    row = 0,
    col = 0,
    solution = Array.from({length:n}, () => new Array(n).fill(undefined));;

    function getNext(row, col) {
        if (direction === 'RIGHT') {
            if (col === n - 1 || solution[row][col + 1]) {
                direction = 'DOWN';
                return [row + 1, col];
            }
            return [row, col + 1];
        } else if (direction === 'DOWN') {
            if (row === n - 1 || solution[row + 1][col]) {
                direction = 'LEFT';
                return [row, col - 1];
            }
            return [row + 1, col]
        } else if (direction === 'LEFT') {
            if (col === 0 || solution[row][col - 1]) {
                direction = 'UP';
                return [row - 1, col];
            }
            return [row, col - 1];
        } else if (direction === 'UP') {
            if (row === 0 || solution[row - 1][col]) {
                direction = 'RIGHT';
                return [row, col + 1];
            }
            return [row - 1, col];
        }
    }

    while (total) {
        total--;
        solution[row][col] = count++;
        var next = getNext(row, col);
        row = next[0];
        col = next[1];
    }

    return solution;

};
