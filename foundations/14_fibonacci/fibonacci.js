const fibonacci = function (num) {
    num = parseInt(num);
    let accumulator = 1;
    let prevNum = 0;
    const arr = [];
    if (num === 0) {
        return 0;
    } else if (num < 0) {
        return `OOPS`;
    }

    for (let i = 0; i < num; i++) {
        arr[i] = accumulator;
        accumulator += prevNum;
        prevNum = accumulator - prevNum;
    }

    return arr[arr.length - 1];
};

fibonacci(6)
//[1, 1, 2]
//[1, 2, 4|3]
//[1|0, 2|1 ]
// Do not edit below this line
module.exports = fibonacci;
