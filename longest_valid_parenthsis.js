/**
 * @param {string} s
 * @return {number}
 */

 // https://leetcode.com/problems/longest-valid-parentheses/
 
var longestValidParentheses = function(s) {
    var n = 0;
    var active_start = [];
    s = s.split('');

    while (n < s.length) {
        if (s[n] === '(') {
            active_start.push(n)
        } else {
            if (active_start.length === 0) {
                s[n] = 0;
            } else {
                s[n] = 1;
                s[active_start.pop()] = 1;
            }
        }
        n++;
    }
    n = 0;
    var max = 0
      , curr = 0;
    while (n < s.length) {
        if (s[n] === 1) {
            curr++;
        } else {
            if (curr > max) {
                max = curr;
            }
            curr = 0;
        }
        n++;
    }
    max = curr > max ? curr : max;
    return max;
};
