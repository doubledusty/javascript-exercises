const reverseString = function(inputString) {
    outputString = ""

    for (i = 1; i < inputString.length; i++){
        outputString = outputString.concat(inputString[inputString.length - i,inputString.length - i + 1])
    }
    return outputString
};

// Do not edit below this line
module.exports = reverseString;
