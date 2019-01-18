

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
    const protocolIndx = str.indexOf('://');
    const pathIndx = str.lastIndexOf('/') + 1;
    let portIndx;
    pathParts.protocol = str.slice(0, protocolIndx);
    pathParts.file = str.slice(pathIndx, str.length);
    for (let i = protocolIndx + 3; i < str.length; i++) {
        if (str[i] === ':') {
            pathParts.host = str.slice(protocolIndx + 3, i);
            portIndx = i + 1;
        }
        if (str[i] === '/') {
            debugger;
            pathParts.port = parseInt(str.slice(portIndx, i));
            pathParts.path = str.slice(i + 1, pathIndx - 1);
            return pathParts;
        }
    }
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
