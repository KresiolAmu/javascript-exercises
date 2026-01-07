const reverseString = function (string) {
    let reversed = ``;
    for (let i = string.length; i > -1; i--) {
        reversed = reversed + string.charAt(i);
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
