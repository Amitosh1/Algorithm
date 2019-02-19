/**
* https://leetcode.com/problems/jump-game
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var nonPassed = {};
    function process(start, length) {
        if (nonPassed[start] >= length)
            return false;
        //nonPassed[start] = length;
        var possible = nums[start];
        //if the number greeater then the end it means we reached end
        if (possible >= length) {
            return true;
        } else {
            while (possible) {
                //checking the next number in aray if they can make result possible
                if (!process(start + possible, length - possible)) {
                    possible--;
                } else {
                    return true;
                }
            }

            if (!nonPassed[start] || nonPassed[start] < length) {
                nonPassed[start] = length;
            }
            return false;
        }
    }
    return process(0, nums.length - 1);
};
