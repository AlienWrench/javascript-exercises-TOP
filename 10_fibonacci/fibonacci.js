const fibonacci = function(num) {
    const startingValue1 = 1;
    const startingValue2 = 1;
    const fibonacciArray = [startingValue1, startingValue2];

    if (num > 0) {
        let i = 0;
        let j = 1; //index positions
        while (fibonacciArray.length < num) {
            fibonacciArray.push(fibonacciArray[i] + fibonacciArray[j]);
            i++;
            j++;
        };

        return fibonacciArray[num - 1];
    } 
    return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
