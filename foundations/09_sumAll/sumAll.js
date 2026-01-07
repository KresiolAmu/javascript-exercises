const sumAll = function (num1, num2) {
    array = [];
    if (typeof num1 !== "number" || typeof num2 !== "number") return "ERROR";
    if (num1 < 0 || num2 < 0) return "ERROR";
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            array.push(i);
        }
    } else {
        for (let i = num1; i >= 0; i--) {
            array.push(i);
        }
    }
    let sum = array.reduce((accumulator, current) => accumulator + current, 0)
    return sum;
}


// Do not edit below this line
module.exports = sumAll;
