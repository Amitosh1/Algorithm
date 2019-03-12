/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    function convertbiToDec(ans){
        return ans.map(elem=>elem.reduceRight((acc,currVal,idx) => acc+currVal*Math.pow(2,elem.length-1-idx)));
        
    }
    var ans = [[0], [1]];
    n === 0 && ans.pop();
    if (n < 2) {
        return convertbiToDec(ans);
    }
    var m = 1;
    var dummy = ans.slice(0);
    var dummy = []
      , reverse = false;
    while (m < n) {
        ans.forEach(i=>{
            if (!reverse) {
                dummy.push([0, ...i]);
                dummy.push([1, ...i]);
            } else {
                dummy.push([1, ...i]);
                dummy.push([0, ...i]);
            }
            reverse = !reverse;
        }
        );
        ans = dummy,
        dummy = [];
        m++;
    }
    return convertbiToDec(ans);
};
