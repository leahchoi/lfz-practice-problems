
function sumArray(array) {
    var result = 0;
    for(let i = 0; i < array.length; i++){
        result += array[i];
    }
    return result;
}

function fitWithinVal(array, num) {
    var result = [];
    for (let i = 0; i < array.length; i++) {
        if (num > array[i]) {
            num -= array[i];
            result.push(array[i]);
        }
    };
    return result;
}

function getAllNamesShorterThan(array, num) {
    var result = [];
    for (let i = 0; i < array.length; i++){
        if(array[i].length <= num){
            result.push(array[i]);
        }
    }
    return result;
}

function makeLabel(obj) {
    
   var result = `${obj.greeting} ${obj.givenName} ${obj.familyName} ${obj['home address'].streetNumber} ${obj['home address'].streetName} ${obj['home address'].city}, ${obj['home address'].state} ${obj['home address'].zip}`
    return result
}
