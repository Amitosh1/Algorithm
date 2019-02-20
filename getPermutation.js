/** https://leetcode.com/problems/permutation-sequence/
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

function getFactorial(n, solution) {
    if (solution[n]) {
        return solution[n];
    } else {
        indx = 3;
        while (indx <= n) {
            solution[indx] = indx * solution[indx - 1];
            indx++;
        }
    }
    return;
}

function solve(solutions, n, k, probable, ans) {
    if (n === 1) {
        ans.push(1);
        return
    } else if (n === 2) {
        if (k === 1) {
            ans.push(probable[0]);
            ans.push(probable[1]);
        } else {
            ans.push(probable[1]);
            ans.push(probable[0]);
        }

        return;
    } else {
        var premN = solutions[n - 1]
        var pos = Math.floor(k / premN);
        var remainder = k % premN;
        if (!remainder) {
            if (!pos) {
                ans.push(probable[0]);
                while (probable.length > 1) {
                    ans.push(probable.pop());
                }
            } else {
                var curr = probable[pos - 1];
                ans.push(curr);
                while (probable.length > 0) {
                    var end = probable.pop();
                    if (curr !== end) {
                        ans.push(end);
                    }
                }

            }

        } else {
            var elem_pos = probable[pos];
            ans.push(elem_pos);
            probable = probable.filter(n=>n != elem_pos);
            return solve(solutions, n - 1, remainder, probable, ans);
        }
    }

}

var getPermutation = function(n, k) {
    var solutions = {
        1: 1,
        2: 2
    };
    getFactorial(n, solutions);
    var ans = [];
    solve(solutions, n, k, new Array(n).fill().map((a,i)=>i + 1), ans);
    return ans.join('');

};
