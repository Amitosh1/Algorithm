// https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
var solutions = [];
    function generatePattern(index,str='',start=n,end=n){
        if(index === 2*n ){
            solutions.push(str);
            return;
        } 
        var probable = undefined;
        if (end > start) {
            if (!start) {
                probable = [')'];
            } else {
                probable = ['(', ')'];
            }
        }if(end === start){
            probable = ['(']
        }
        while(probable.length >0){
            var curr = probable.pop();
            var new_start = curr === '(' ? start-1:start;
            var new_end = curr === '(' ? end:end-1;
            var new_str = str+curr;
            generatePattern(index+1,new_str,new_start,new_end);
        }
    }

    generatePattern(0);
    return solutions;
    
};
