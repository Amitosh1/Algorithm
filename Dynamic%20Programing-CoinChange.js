function coinChange(denomination, currency) {
    var count = 0;
    function calculator(currency, index=denomination.length - 1) {
        if (index === 0) {
            currency % denomination[0] === 0 && count++;
        } else {
            var elem = denomination[index];
            var max_count = Math.floor(currency / elem);
            while (max_count >= 0) {
                var sum = max_count * elem;
                // if()
                if (currency === sum) {
                    count++;
                } else {
                    if (index !== 0)
                        calculator(currency - sum, index - 1);
                }
                max_count--;
            }
        }

    }

    calculator(currency);
   // console.log(combo);
    return count;
}
