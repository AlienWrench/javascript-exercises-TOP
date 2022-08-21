const reverseString = function(string) {
    let reverseWord = '';

    for (i = 1; i <= string.length; i++) {
        reverseWord += string.substr(-(i), 1);
    }

    return reverseWord;

};

// Do not edit below this line
module.exports = reverseString;
