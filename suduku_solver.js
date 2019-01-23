/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function checkRow(board, i, j) {
    if (board[i][j] !== '.')
        return true;
    var probable = {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9
    };
    var tmp = 0;
    while (tmp < 9) {
        var curr = board[i][tmp];
        if (curr && curr !== '.') {
            delete probable[curr];
        }
        tmp++;
    }
    if (Object.keys(probable).length === 1) {
        board[i][j] = probable[Object.keys(probable)[0]];
        return true;
    } else {
        return checkColumn(board, i, j, probable);
    }
}

function checkColumn(board, i, j, probable) {
    var tmp = 0;
    while (tmp < 9) {
        var curr = board[tmp][j];
        if (curr && curr !== '.') {
            probable[curr] && delete probable[curr];
        }
        tmp++;
    }
    if (Object.keys(probable).length === 1) {
        board[i][j] = probable[Object.keys(probable)[0]];
        return true;
    } else {
        return checkBox(board, i, j, probable);
    }

}

function checkBox(board, i, j, probable) {
    var start_i = -Infinity
      , end_i = -Infinity
      , start_j = -Infinity
      , end_j = -Infinity;
    switch (i) {
    case 1:
    case 2:
    case 0:
        start_i = 0,
        end_i = 2;
        break;
    case 3:
    case 4:
    case 5:
        start_i = 3,
        end_i = 5;
        break;
    case 6:
    case 7:
    case 8:
        start_i = 6,
        end_i = 8;
        break;
    }

    switch (j) {
    case 1:
    case 2:
    case 0:
        start_j = 0,
        end_j = 2;
        break;
    case 3:
    case 4:
    case 5:
        start_j = 3,
        end_j = 5;
        break;
    case 6:
    case 7:
    case 8:
        start_j = 6,
        end_j = 8;
        break;
    }
    var a = start_i;
    while (a <= end_i) {
        var b = start_j;
        while (b <= end_j) {
            var curr = board[a][b];
            if (curr && curr !== '.') {
                probable[curr] && delete probable[curr];
            }
            b++;
        }
        a++;
    }
    if (Object.keys(probable).length === 1) {
        board[i][j] = probable[Object.keys(probable)[0]];
        return true;
    } else {
        return false;
    }

}

var solveSudoku = function(board) {
    var i = 9
      , j = 9
      , unsolved_count = 81;
    while (unsolved_count > 0) {
        i = 9;
        unsolved_count = 81;
        while (--i >= 0) {
            j = 9;
            while (--j >= 0) {
                var prev = board[i][j];
                if (checkRow(board, i, j)) {
                    unsolved_count--;
                }
            }
        }
    }
    return board
};


// var board = [[5,3,'.','.',7,'.','.','.','.'],[6,'.','.',1,9,5,'.','.','.'],['.',9,8,'.','.','.','.',6,'.'],[8,'.','.','.',6,'.','.','.',3],[4,'.','.',8,'.',3,'.','.',1],[7,'.','.','.',2,'.','.','.',6],['.',6,'.','.','.','.',2,8,'.'],['.','.','.',4,1,9,'.','.',5],['.','.','.','.',8,'.','.',7,9]]
//solveSudoku(board)