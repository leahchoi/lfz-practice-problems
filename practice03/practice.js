function groupArray(array){
    let types = [];
    let output = [];
    for(let i = 0; i < array.length; i++){
        let indexNum = types.indexOf(typeof (array[i]));
        if (indexNum !== -1){
            output[indexNum].push(array[i]);
        }else{
            types.push(typeof(array[i]));
            output.push([array[i]]);
        }
    }
    return output;
}