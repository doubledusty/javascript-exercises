const sumAll = function(a, b) {
    if (a < 0 || b < 0  || !Number.isInteger(a) || !Number.isInteger(b)) {
            return "ERROR"
        }
    if (a > b) {
        let c = b
        b = a
        a = c
    }
    let sum = 0
    for (let i = 0; i <= b-a; i++){
        sum = sum + i + a
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
