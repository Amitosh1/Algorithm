function getRange(indx) {
    if (indx <= 2)
        return [0, 2];
    if (indx <= 5)
        return [3, 5];
    if (indx <= 8)
        return [6, 8];
}

function checkBoard(board) {
    var i = 0;
    j = 0;
    while (i < 9) {
        while (j < 9) {
            var solved = false;
            var range = getRange(i);
            var start_i = range[0]
              , end_i = range[1];
            var range2 = getRange(j);
            var start_j = range2[0]
              , end_j = range2[1];
            while (start_i <= end_i) {
                while (start_j <= end_j) {
                    if ((start_i === i && start_j === j) || board[start_i][start_j] !== board[i][j]) {
                        start_j++
                    } else {
                        start_i = 10;
                        break;
                    }
                }
                if (start_i !== 10) {
                    start_j = range2[0];
                    start_i++;
                }
            }
            if (start_i !== 10) {
                var curr = 0;
                while (curr < 9) {
                    if ((curr == j || (board[i][curr] !== board[i][j])) && (curr == i || (board[curr][j] !== board[i][j]))) {
                        curr++;
                    } else {
                        curr = 10;
                        break;
                    }
                }
                if (curr !== 10) {
                    solved = true;
                }
            }
            if (solved) {
                j++;
            } else {
                i = 10;
                break;
            }
        }
        if (i !== 10) {
            j = 0;
            i++;
        } else {
            break;
        }
    }
    return i !== 10;
}

function isValidBoard(board, patterns) {
    var indx = 0;
    while (indx < patterns.length) {
        var indicis = patterns[indx][0].split(',').map(x=>Number(x));
        board[indicis[0]][indicis[1]] = ''+patterns[indx][1];
        indx++;
    }
    return checkBoard(board);
}
function removeDuplicates(values, cur_key, check) {
    var indicis = cur_key.split(',').map(x=>Number(x));
    var curr = 0;
    var remaining  = values.slice(0);
    while (curr < 9) {
        if (check[[indicis[0], curr]] && remaining.indexOf(check[[indicis[0], curr]]) >= 0) {
            remaining.splice(remaining.indexOf(check[[indicis[0], curr]]), 1);
        }
        if (check[[curr, indicis[1]]] && remaining.indexOf(check[[curr, indicis[1]]]) >= 0) {
            remaining.splice(remaining.indexOf(check[[curr, indicis[1]]]), 1);
        }
        if (remaining.length === 0) {
            break;
        }
        curr++;
    }
    if (remaining.length !== 0) {
        var range = getRange(indicis[0]);
        var start_i = range[0]
          , end_i = range[1];
        var range2 = getRange(indicis[1]);
        var start_j = range2[0]
          , end_j = range2[1];
        while (start_i < end_i) {
            while (start_j < end_j) {
                if (check[[start_i, start_j]] && remaining.indexOf(check[[start_i, start_j]]) >= 0) {
                    remaining.splice(remaining.indexOf(check[[start_i, start_j]]), 1);
                    if (remaining.length === 0) {
                        break;
                    }
                }
                start_j++;
            }
            if (remaining.length === 0) {
                break;
            }else{
                start_j = range2[0];
                start_i++;
            }
        }
    }

    return remaining;

}
function solveProbable(probables, board, keys, indx=0, patterns=[],check={}) {
    if (indx < keys.length) {
        var solved = false;
        var values = probables[keys[indx]];
        var removed = removeDuplicates(values, keys[indx], check);
        var vals = 0;
       // exit;
        
        while (vals < removed.length) {
            patterns.push([keys[indx], removed[vals]]);
            check[keys[indx]] = removed[vals];
            if (solveProbable(probables, board, keys, indx + 1, patterns,check)) {
                solved = true;
                break;
            } else {
                patterns.pop();
                delete check[keys[indx]];
                vals++;
            }
        }
        return solved;
    } else {
        return isValidBoard(board, patterns);
    }

}
function solveSudoku(board) {
    var probable = [...new Array(10).keys()];
    probable.shift();
    var i = 0
      , j = 0
      , probables = {}
      , unsolved = 81
      , unsolved_curr = 81;
    function solve() {
        while (i < 9) {
            while (j < 9) {
                if (board[i][j] === '.') {
                    var tmp = [...new Array(10).keys()];
                    tmp.shift();
                    var curr = 0;
                    while (curr < 9) {
                        if (board[i][curr] !== '.') {
                            var tmp2 = Number(board[i][curr]);
                            tmp = tmp.filter((val)=>val !== tmp2);
                            if (tmp.length === 1) {
                                board[i][j] = ''+tmp[0];
                                delete probables[[i, j]];
                                unsolved_curr--;
                                break;
                            }
                        }
                        if (board[curr][j] !== '.') {
                            var tmp2 = Number([board[curr][j]]);
                            tmp = tmp.filter((val)=>val !== tmp2);
                            if (tmp.length === 1) {
                                board[i][j] = ''+tmp[0];
                                delete probables[[i, j]];
                                unsolved_curr--;
                                break;
                            }
                        }
                        curr++;
                    }
                    if (!probable[board[i][j]]) {
                        var range = getRange(i);
                        var start_i = range[0]
                          , end_i = range[1];
                        var range2 = getRange(j);
                        var start_j = range2[0]
                          , end_j = range2[1];
                        while (start_i <= end_i) {
                            while (start_j <= end_j) {
                                if (board[start_i][start_j] != '.') {
                                    var tmp2 = Number(board[start_i][start_j]);
                                    tmp = tmp.filter((val)=>val !== tmp2);
                                    if (tmp.length === 1) {
                                        board[i][j] = ''+tmp[0];
                                        delete probables[[i, j]];
                                        unsolved_curr--;
                                        break;
                                    }
                                }
                                start_j++;
                            }
                            if (tmp.length === 1) {
                                break;
                            }
                            start_j = range2[0];
                            start_i++;
                        }
                        if (board[i][j] === '.') {
                            probables[[i, j]] = tmp;
                        }
                    }
                }
                j++;
            }
            j = 0;
            i++;
        }
        if (unsolved_curr > 0 && unsolved_curr !== unsolved) {
            unsolved = unsolved_curr;
            i = 0;
            j = 0;
            solve();
        } else {
            //console.log('Not Able to solve Board');
            //console.log(board);
            //console.log('Unsolved count', unsolved_curr);
            //console.log('Probables', probables);
            solveProbable(probables, board, Object.keys(probables), 0, [])
        }
    }
    solve();
    return board;

}
