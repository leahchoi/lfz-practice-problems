// var input_array =
//     [
//         [1, 1, 4, 7, 8, 3, 6, 9, 5, 8],
//         [0, 4, 3, 3, 2, 3, 1, 5, 8, 1],
//         [5, 8, 5, 1, 1, 8, 0, 7, 4, 1],
//         [6, 3, 9, 1, 3, 8, 1, 6, 1, 6]
//     ]
// var average_size = 2</pre>
//     ```
// Output:
// ```
//     < pre >
//     output =[
//         [1.5, 1.5, 4.2, 4.2, 4.0, 4.0, 5.2, 5.2, 5.5, 5.5],
//         [1.5, 1.5, 4.2, 4.2, 4.0, 4.0, 5.2, 5.2, 5.5, 5.5],
//         [5.5, 5.5, 4.0, 4.0, 5.0, 5.0, 3.5, 3.5, 3.0, 3.0],
//         [5.5, 5.5, 4.0, 4.0, 5.0, 5.0, 3.5, 3.5, 3.0, 3.0]
//     ]</pre >

// This function will open push the first two rows of the output
function average_array(input_array){
    let result = [];
    let row = [];
    for(let i = 0; i < input_array[0].length; i++){
        row.push((input_array[i][i] + input_array[i][i+1] + input_array[i+1][i] + input_array[i+1][i+1]) /4);
        row.push((input_array[i][i] + input_array[i][i+1] + input_array[i+1][i] + input_array[i+1][i+1]) / 4);
    }
    result.push(row);
    return result;
}   