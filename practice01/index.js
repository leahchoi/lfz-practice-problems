function biggerWords(str, array){
    let result = [];
    for(let i = 0; i < array.length; i++){
        if(array[i].length > str.length){
            result.push(array[i]);
        } 
    }
    return result;
}


// var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];`
// biggerWords('whales', myArray);`
// Output - `['reptile', 'mammoth', 'turtles']`