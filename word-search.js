/**
 * https://leetcode.com/problems/word-search
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const word_arr = word.split('')
      , row = board.length
      , col = board[0].length;
    var i = 0
      , j = 0;

    function probable(indxs) {
        var sols = []
          , x = indxs[0]
          , y = indxs[1];
        board[x][y + 1] && sols[[x, y + 1]]

    }

    function foundSolution(indx, word_indx, matched_locations) {
        var x = indx[0]
          , y = indx[1];

        if (word_indx === word.length) {
            return true
        }

        if (matched_locations.indexOf(x + ',' + (y + 1)) === -1 && board[x][y + 1] === word[word_indx]) {
            var dum = matched_locations.slice(0);
            dum.push(x + ',' + (y + 1))
            if (foundSolution([x, y + 1], word_indx + 1, dum)) {
                return true;
            }
        }
        if (matched_locations.indexOf(x + ',' + (y - 1)) === -1 && board[x][y - 1] === word[word_indx]) {
            var dum = matched_locations.slice(0);
            dum.push(x + ',' + (y - 1))
            if (foundSolution([x, y - 1], word_indx + 1, dum)) {
                return true;
            }
        }
        if (matched_locations.indexOf((x + 1) + ',' + y) === -1 && board[x + 1] && board[x + 1][y] === word[word_indx]) {
            var dum = matched_locations.slice(0);
            dum.push((x + 1) + ',' + y)
            if (foundSolution([x + 1, y], word_indx + 1, dum)) {
                return true;
            }
        }
        if (matched_locations.indexOf((x - 1) + ',' + y) === -1 && board[x - 1] && board[x - 1][y] === word[word_indx]) {
            var dum = matched_locations.slice(0);
            dum.push((x - 1) + ',' + y)
            if (foundSolution([x - 1, y], word_indx + 1, dum)) {
                return true;
            }
        }
        return false;

    }
    while (i < row) {
        while (j < col) {
            if (board[i][j] !== word[0]) {
                j++;
            } else {
                if (foundSolution([i, j], 1, [i + ',' + j])) {
                    return true;
                }
                j++;
            }
        }
        j = 0;
        i++;
    }

    return false;
};
