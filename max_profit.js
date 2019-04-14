/** best-time-to-buy-and-sell-stock-ii
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2)
        return 0;
    const lasts = [];
    let prev = undefined
      , i = 1;
    while (i < prices.length) {
        var diff = prices[i] - prices[i - 1];
        if (!prev) {
            prev = [];
        } else {
            prev = prev.map(elem => elem + diff);
        }
        prev.push(diff);
        lasts.push(diff >= 0 ? diff : 0);
        i++;
    }
    //console.log(lasts);
    return lasts.reduce((elem,curr)=>elem + curr);

};
