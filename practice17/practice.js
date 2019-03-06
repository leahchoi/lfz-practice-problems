function skippy_numbers(num){
    let output = [];
    let addingNum = num
    while(output.length < 8){
        output.push(addingNum);
        output.push(++addingNum);
        addingNum += num;
    }
    return output;
}

// skippy_numbers(2);

// output:
// -[2, 3, 5, 6, 8, 9, 11, 12];