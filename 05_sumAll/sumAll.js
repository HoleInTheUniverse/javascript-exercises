const sumAll = function(x, y) {
    if (!Number.isInteger(x) || !Number.isInteger(y)) return 'ERROR';
    if (x < 0 || y < 0) return 'ERROR';

    const nTerm = Math.abs(x - y) + 1;
    return nTerm / 2 * (x + y);
};

// Do not edit below this line
module.exports = sumAll;
