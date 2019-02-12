// - `var myArray = ['cat','caterpillar','whale','accurate','smile','cactus','cute'];`
//     - `fittingWords('cat', myArray);`
//     - Output - `['cat','caterpillar','accurate','cactus']`

function fittingWords(str, array){
    let dictionary = {};
    let strDictionary = {};
    let result = [];
    for(let i = 0; i < str.length; i++){
        if(strDictionary[str[i]] !== undefined){
            strDictionary[str[i]]++;
        }else{
            strDictionary[str[i]] = 1;
        }
    }
    console.log(strDictionary)
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].length; j++){
            if (dictionary[array[i][j]] !== undefined) {
                dictionary[array[i][j]]++;
            } else {
                dictionary[array[i][j]] = 1
            }
            
        }
        let counter = 0;
        for (let letter in strDictionary) {
            if (strDictionary[letter] <= dictionary[letter]) {
                counter++;
            }
        }
        if (counter === str.length) {
            result.push(array[i]);
        }
    }
    return result;
}

// create a space to store all the letters counter for a word
// iterate through every word in the array 
// store all the alphabet in the variable created
// iterate through the string dictionary
// compare the word dictionary with the str dictionary
// if word dictionary has more or equal to the numbers of the letters, add it on to the result variable
// if not, just skip through the word
// after iterating through the whole array, return result