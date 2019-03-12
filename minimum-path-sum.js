/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var touched = {}
      , max_x = grid.length
      , max_y = grid[0].length
      , solve = (indx_x,indx_y,curr_sum)=>{
        var key = indx_x + ',' + indx_y
          , curr_location_sum = curr_sum + grid[indx_x][indx_y];
        if (touched[key] >= 0 && (touched[key] <= curr_location_sum)) {
            return;
        }
        touched[key] = curr_location_sum;
        (indx_x + 1 < max_x) && solve(indx_x + 1, indx_y, curr_location_sum);
        (indx_y + 1 < max_y) && solve(indx_x, indx_y + 1, curr_location_sum);
    }
    solve(0, 0, 0);
    return touched[(max_x - 1) + ',' + (max_y - 1)];
};
