/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var m = 1;
    sum = nums[0];
    max = sum;
    while(m <nums.length){
     var in_sum = sum+nums[m];
     if(nums[m]> in_sum){
         start = m;
         max = nums[m] >max ? nums[m]:max;
         sum = nums[m];
     }else if(in_sum>sum){
         max = in_sum>max ? in_sum:max;
         sum=in_sum;
     }else{
         sum =in_sum;
     }
     m++;
    }
    return max;
    
};