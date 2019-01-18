

function getPath(str) {
    return str.split('/');
}

function getPathParts(str) {
    let pathParts = {
        'protocol': '',
        'host': '',
        'port': null,
        'path': '',
        'file': ''
    };
    // for (let i = str.length-1; i >= 0; i--){

    // }
    str = str.replace(':', '').replace('/', '')
    return str;
}

function getCapitalCount(array) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        let asciiNum = array[i][0].charCodeAt();
        if (64 < asciiNum && asciiNum < 91) {
            counter++;
        }
    }
    return counter;
}

function correctCalcChecker(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (eval(array[i].num1 + array[i].op + array[i].num2) === array[i].result) {
            result.push(array[i]);
        };
    }
    return result;
}

function doMath() {

}
