const repeatString = function(inputString, rep) {
    if (rep < 0){
        return "ERROR"
    }
    let outputString = ""

    for(i = 0; i < rep; i++){
    outputString = outputString.concat(inputString)

    }
    return outputString
};

// Do not edit below this line
module.exports = repeatString;
