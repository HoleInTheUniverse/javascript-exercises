const removeFromArray = function(array, ...removedObjects) {
    for (let i = 0; i < removedObjects.length; i++) {
        let index = array.indexOf(removedObjects[i]);
        
        while (index !== -1) {
            array = array.toSpliced(index, 1);
            index = array.indexOf(removedObjects[i]);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
