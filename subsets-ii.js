/**
 * https://leetcode.com/problems/subsets-ii/
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    // creating the empty set
    var solutions = {
        '': []
    };
    // sorting the provided input so that sorted set is easy to compute
    nums.sort();
    while (nums.length > 0) {
        var num = nums.pop();
        var temp = Object.assign({}, solutions);
        Object.keys(temp).forEach(key=>{
            if (!solutions[key + ',' + num]) {
                solutions[key + ',' + num] = 1;
            }
        }
        );
    }

    //string based key need to be conveted to number as per answer

    return Object.keys(solutions).map(key=>key.split(',').filter(str=>str !== '').map(st=>Number(st)));
};
