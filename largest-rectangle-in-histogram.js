/**
 * https://leetcode.com/problems/largest-rectangle-in-histogram/
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    function calculateMax(indx) {
        var curr = heights[indx]
          , pos = indx + 1
          , min = curr
          , max_area = curr;
        while (pos < heights.length) {
            var curr_pos_width = heights[pos];
            min = curr_pos_width > min ? min : curr_pos_width;
            curr_area = min * ((pos - indx) + 1);
            max_area = (max_area > curr_area) ? max_area : curr_area;
            pos++;
        }

        return max_area;
    }

    let prev = -Infinity
      , start = 0
      , max = -Infinity;
    while (start < heights.length) {
        if (start > prev) {
            var curr_max = calculateMax(start);
            max = max > curr_max ? max : curr_max;
            
        }
        start++;
    }

    return heights.length === 0 ?0:max;

};
