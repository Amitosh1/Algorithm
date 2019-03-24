/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    var length = nums.length;
    if (length === 0)
        return 0;
    var start = 1
      , initial = nums[0]
      , occurance = 1
      , final = 1;

    while (start < length) {
        if (nums[start] === initial) {
            if (occurance !== 2) {
                final++;
                occurance++;
            } else {
                nums[start] = Infinity;
            }
        } else {
            initial = nums[start];
            occurance = 1;
            final++;
        }
        start++;
    }

    nums.sort((a,b)=>a - b)

    return final;

};
