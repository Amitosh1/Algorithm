/**
 * @param {number} n
 * @return {number}
 */
var steps = {};
var climbStairs = function(n, steps={
    1: 1,
    2: 2
}) {
    var m =3 ;
    while (m<=n){
        steps[m]=steps[m-1]+steps[m-2];
        m++;
    }
        return steps[n];
};
