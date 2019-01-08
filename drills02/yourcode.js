function countOccurences(array, word){
    var counter = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] === word){
            counter++;
        }
    }
    return counter;
}

function wordLengths(array){
    var result = [];
    for(let i = 0; i < array.length; i++){
        result.push(array[i].length);
    }
    return result;
}

function getMinMaxMean(array){
    var result = {
        'min': array[0],
        'max': array[0],
        'mean': array[0]
    };
    for(let i = 1; i < array.length; i++){
        if(array[i] < result.min){
            result.min = array[i];
        }
        if(array[i] > result.max){
            result.max = array[i]
        }
        result.mean += array[i];
    }
    result.mean = result.mean/array.length;
    return result;
}

function findMode(array){
    var numCounter = {};
    for(let i = 0; i < array.length; i++){
        if(numCounter[array[i]]){
            numCounter[array[i]] += 1;
        }else {
            numCounter[array[i]] = 1;
        }
    }
    return numCounter;
}
