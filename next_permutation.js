/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 // https://leetcode.com/problems/next-permutation/
 
var nextPermutation = function(nums) {
    function sort(a, b) {
        return a - b
    }
    ;var n = nums.length - 1;
    while (n >= 0) {
        if (nums[n] > nums[n - 1]) {
            var arr2 = nums.slice(n, nums.length);
            arr2.sort(sort);
            var b = 0;
            while (nums[n - 1] >= arr2[b]) {
                b++;
            }
            var tmp2 = arr2[b];
            arr2[b] = nums[n - 1];
            nums[n - 1] = tmp2;
            nums.splice(n, nums.length - n, ...arr2);
            break;
        }
        n--;
    }
    if (n <= 0) {
        nums.sort(sort);
    }

    //return nums;

};
