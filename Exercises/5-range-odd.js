'use strict';

const rangeOdd = (start, end) => {
    const arr = []
    for (let i = start % 2 ? start : start + 1; i <= end; i += 2) {
        arr.push(i)
    }
    return arr
}
module.exports = { rangeOdd };
