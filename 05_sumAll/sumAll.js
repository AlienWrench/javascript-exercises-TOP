const sumAll = function(start, end) {
    let sum = 0;

    if (typeof start !== 'number' || typeof end !== 'number' || start + end <= 0) {
        return "ERROR";
    } else if (start < end) {
        let i = start;
        while (i <= end) {
            sum += i;
            i++;
        }
        return sum;
    } else if (end < start) {
        let i = end;
        while (i <= start) {
            sum += i;
            i++;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
