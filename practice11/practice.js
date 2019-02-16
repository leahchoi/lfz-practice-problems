// - `evenodd([2,5,1,6,8,2,20,'cat',13,3]);`
//     - Output - {
//         odd: [5, 1, 13, 3],
//         even: [2, 6, 8, 20]
//     }

function evenOdd(array){
    let result = {
        odd: [],
        even: []
    }
    for(let i = 0; i < array.length; i++){
        if(array[i].typeof() === 'number'){
            if(array[i] % 2 === 0){
                result[even].push(array[i])
            }else {
                result[odd].push(array[i])
            }
        }
    }
    return result;
}