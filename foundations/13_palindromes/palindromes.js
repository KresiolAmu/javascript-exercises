

const palindromes = function (str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    // console.log(cleanStr);
    const strLength = Math.round(str.length / 2);
    let ans = true;

    for (let i = 0; i < strLength; i++) {
        if (ans === true) {
            if (cleanStr[i] === cleanStr[cleanStr.length - i - 1]) {
                ans = true;
            } else ans = false;
        } else ans = false;



        // console.log(cleanStr[i]);
        // console.log(cleanStr[cleanStr.length - i - 1]);
    }
    return ans;
};

// palindromes('assgdijhqwe5ioryuwefa');

// Do not edit below this line
module.exports = palindromes;
