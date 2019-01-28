/**
 * @param {number[]} nums
 * @return {number}
 */
 // https://leetcode.com/explore/featured/card/top-interview-questions-easy/97/dynamic-programming/576/
var rob = function(nums, start=0) {
    var indx = 0;
    var length = nums.length
    var solutions = {};
    while(indx<length){
        if(indx === 0){
            solutions[0] = nums[indx];
        }else if(indx ===1){
            solutions[1] = nums[0]>nums[1]? nums[0]:nums[1];
        }else{
            solutions[indx]=Math.max(nums[indx]+solutions[indx-2],solutions[indx-1]);
        }
        indx++;
    }
    return solutions[nums.length-1] || 0;
};
