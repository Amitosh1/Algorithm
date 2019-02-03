/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var start = 1
      , curr = nums[0]
      , replace = 1
      ,length = nums.length;
    while (start < length) {
        if (nums[start] !== curr) {
            nums[replace++] = nums[start];
            curr = nums[start];
        }
        start++;
    }
    
    return replace;

};
