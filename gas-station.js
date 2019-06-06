/**
 * https://leetcode.com/problems/gas-station/submissions/
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    var len = gas.length
      , i = 0
      , final_sum = 0
      , curr_sum = -Infinity
      , indx = -1;
    while (i < len) {
        curr_state = gas[i] - cost[i];
        if (curr_state >= 0) {
            if (curr_sum === -Infinity) {
                indx = i;
                curr_sum = curr_state;
            } else {
                curr_sum += curr_state;
            }
        } else {
            if (curr_sum !== -Infinity) {
                curr_sum += curr_state;
                if (curr_sum < 0) {
                    curr_sum = -Infinity;
                    indx = -1;
                }
            }
        }
        final_sum+=curr_state;
        i++;
    }
    return final_sum<0 ? -1:indx;
};
