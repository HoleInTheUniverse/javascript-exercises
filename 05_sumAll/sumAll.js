const sumAll = function(x, y) {
    if ((x < 1 || y < 1) || (typeof(x) !== "number" || typeof(y) !== "number") || (!Number.isInteger(x) || !Number.isInteger(y))) {
        return 'ERROR';
    }

    const nTerm = Math.abs(x - y) + 1;
    return nTerm / 2 * (x + y);
};

// Do not edit below this line
module.exports = sumAll;
