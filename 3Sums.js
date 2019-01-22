/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 //https://leetcode.com/problems/3sum/
 
var threeSum = function(nums) {
    var pairs = []
      , start = 0
      , length = nums.length
      , pairOfTwo = {}
      , start_visited = [];

    function getPairsCount(nums, count=3, sum=0, start_indx=0) {
        if (count === 3) {
            while (start_indx < length) {
                if (start_visited.indexOf(nums[start_indx]) >= 0) {
                    start_indx++;
                    continue;
                }
                start_visited.push(nums[start_indx]);
                pairs.push([nums[start_indx]]);
                getPairsCount(nums, 2, nums[start_indx], ++start_indx);
                if (pairs[pairs.length - 1].length === 0) {
                    pairs.pop();
                }
            }

        } else if (count === 2) {
            while (start_indx < length) {
                pairs[pairs.length - 1].push(nums[start_indx]);
                if (pairOfTwo[pairs[pairs.length - 1].slice(0).sort().toString()]) {
                    pairs[pairs.length - 1].pop();
                    ++start_indx;
                    continue;
                }
                getPairsCount(nums, 1, sum + nums[start_indx], ++start_indx);
            }
            if (start_indx === length && pairs[pairs.length - 1].length === 1) {
                pairs[pairs.length - 1].pop();
            }
        } else {
            while (start_indx < length) {
                var last = nums[start_indx++];
                if (sum + last === 0) {
                    var last_pair = pairs[pairs.length - 1].slice(0);
                    pairOfTwo[[last_pair[0], last_pair[1]].sort().toString()] = true;
                    pairOfTwo[[last_pair[0], last].sort().toString()] = true;
                    pairOfTwo[[last_pair[1], last].sort().toString()] = true;
                    pairs[pairs.length - 1].push(last);
                    pairs.push(last_pair)
                    break;
                } else {
                    if (start_indx === length) {
                        pairs[pairs.length - 1].pop();
                        return;
                    }
                }
            }
            if (pairs[pairs.length - 1].length === 2) {
                pairs[pairs.length - 1].pop();
            }
        }

    }
    getPairsCount(nums, 3, 0, 0)
    return pairs
};
