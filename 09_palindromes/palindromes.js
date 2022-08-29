const palindromes = function (string) {
    let reverseCounter;
    string = string.toLowerCase();

    for (let j = 0; j < string.length; j++) {
        if (string.charAt(j) === ' ' || string.charAt(j) === '!' || string.charAt(j) === ',' || string.charAt(j) === '.' ) {
            string = string.replace(string.charAt(j), '');
            j--;
        }
    }

    reverseCounter = string.length - 1;

    for (let i = 0; i <string.length; i++) {
        if (string.charAt(i) !== string.charAt(reverseCounter)) {
            return false;
        }
        reverseCounter--;
    }

    return true;
}


// Do not edit below this line
module.exports = palindromes;
