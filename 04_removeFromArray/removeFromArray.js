const removeFromArray = function(fullList, ...toRemove) {
    let arrayList = Array.from(fullList)
    for (i = 0; i < toRemove.length; i++) {
        //for each item in the array check if the current item to be removed
        //matches and if so, remove it
        for (j = 0; j < arrayList.length; j++)
        if (arrayList[j] === toRemove[i]) {
            arrayList.splice(j, 1)
        }

    }
    return arrayList

};

// Do not edit below this line
module.exports = removeFromArray;
