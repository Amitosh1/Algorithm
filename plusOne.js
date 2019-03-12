// https://leetcode.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var i = digits.length - 1;
    while (i >= 0) {
        if (digits[i] === 9) {
            digits[i] = 0;
            i--;
        } else {
            digits[i] = digits[i] + 1;
            break;
        }
    }
    if (digits[0] === 0) {
        digits[0] = 1;
        digits.push(0);
    }
    return digits;
};
