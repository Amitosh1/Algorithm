/**
 * @param {number} n
 * @return {string[][]}
 */
function cleanup(probable, row, col, n) {
    var i = 0
      , j = 0;
    while (j < n) {
        delete probable[row + '' + ++j];
    }
    j = 0;
    while (i < n) {
        delete probable[++i + '' + col];
    }
    i = row,
    j = col;
    while (i < n && j < n) {
        delete probable[++i + '' + ++j]
    }
    i = row,
    j = col;
    while (i >= 0 && j < n) {
        delete probable[--i + '' + ++j]
    }
    i = row,
    j = col;
    while (i >= 0 && j >= 0) {
        delete probable[--i + '' + --j]
    }
    i = row,
    j = col;
    while (i < n && j >= 0) {
        delete probable[++i + '' + --j]
    }
}

var solveNQueens = function(n) {
    var probable = {}
      , i = 0
      , j = 0
      , pattern = [];
    //populating all the place holders
    while (i < n) {
        while (j < n) {
            probable[i + '' + j++] = true;
        }
        i++;
        j = 0;
    }

    var final = [];
    var iter = 1;

    function solveForPattern(row, col, curr_probable, pattern) {
        if (row >= n || col >= n) {
            if (pattern.length === n) {
                final.push(pattern.slice(0));
            }
            return false;
        }
        if (curr_probable[row + '' + col]) {
            delete curr_probable[row + '' + col];
            pattern.push(col);
            var prev = {};
            Object.assign(prev, curr_probable);
            cleanup(curr_probable, row, col, n);
            if (solveForPattern(row + 1, 0, curr_probable, pattern)) {
                return true;
            } else {
                pattern.pop();
                return solveForPattern(row, col + 1, prev, pattern);
            }

        } else {
            return solveForPattern(row, col + 1, curr_probable, pattern);
        }
    }
    solveForPattern(0, 0, probable, []);
    return final.map(solution=>{
        return solution.map(col=>{
            var i = 0
              , str = '';
            while (i< n) {
                str += (i !== col ?  '.' : 'Q');
                i++;
            }
            return str;
        }
        )
    }
    );
    //return final;
};
