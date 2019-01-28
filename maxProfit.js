/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var m=0;
    var max_profit = 0,profit;
    while(m<prices.length){
     if(m ===0) max_profit = 0,profit = 0;
     else{
         profit = (prices[m]-prices[m-1]+profit )>0?(prices[m]-prices[m-1]+profit ):0;
         max_profit = profit>max_profit?profit:max_profit;
     }
     m++;
    }
    return max_profit;
};