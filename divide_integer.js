/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (divisor === 1)
        return dividend;
        if(divisor === dividend) return 1;
    //if (divisor === -1)
    //    return -dividend;
    var count = 0;
    if (dividend > 0 && divisor > 0) {
        while (dividend - divisor > 0) {
            dividend -= divisor;
            count++;
        }
    } else if (dividend < 0 && divisor < 0) {
        while (dividend - divisor < 0) {
            dividend -= divisor;
            count++;
        }
    } else if (dividend < 0 && divisor > 0) {
        while (dividend + divisor <= 0) {
            dividend += divisor;
            count--;
        }
    } else {
        while (dividend + divisor >= 0) {
            dividend += divisor;
            count--;
        }
    }
    return count;
};
