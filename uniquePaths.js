/** https://leetcode.com/problems/unique-paths
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var uniquePaths = function(m, n) {
    var metrix = new Array(m).fill().map(a=>new Array(n).fill().map(b=>true));
    var answer = 0
      , indx = {};
    function getNext(x, y) {
        var solution = [];
        metrix[x + 1] && solution.push([x + 1, y]);
        metrix[x][y + 1] && solution.push([x, y + 1]);
        return solution;
    }

    function solve(elem, probable) {
        if (probable.length === 0) {
            indx[elem] = 1;
            return;
        }
        var sol = 0
        while (probable.length > 0) {
            var nxt = probable.pop();
            if (indx[[nxt[0] , nxt[1]]]) {
                sol+=indx[[nxt[0] , nxt[1]]];
            } else {
                solve([nxt[0] , nxt[1]], getNext(nxt[0], nxt[1]));
                 sol+=indx[[nxt[0] , nxt[1]]];
            }
        }
        if (probable.length === 0) {
            indx[elem] = sol;
        }
    }
    solve([0,0],getNext(0, 0));
    return indx[[0,0]];

};
