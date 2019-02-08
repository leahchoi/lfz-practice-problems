function fibSequence(num){
    // created an array with 0, 1 since index 0 or 1 doesn't have two nums to add 
    let fibSeq = [0, 1];
    // created an if statement just incase the num is 1 or 2
    if(num <= 2){
        return fibSeq[num-1];
    }
    // created a for loop to create the fib sequence
    for(let i = 2; i < num; i++){
        // adding the two previous number and previous number 
        // And pushing it onto the array
            //ex. at i:2, adding fibSeq[0] and fibSeq[1] to push the result onto fibSeq
        fibSeq.push(fibSeq[i-2]+ fibSeq[i-1]);
    }
    // returning the last number since that will be the output
    return fibSeq[fibSeq.length-1];
}

- `fibSequence(12);`
    - Output - `0 1 1 2 3 5 8 13 21 34 55 89`