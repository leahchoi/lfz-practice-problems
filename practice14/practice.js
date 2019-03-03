function arrayFactors(arr) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        let divisibleNum = 2;
        let divisibleArr = [];
        while (divisibleNum < arr[i]) {
            if (arr[i] % divisibleNum === 0) {
                divisibleArr.push(divisibleNum);
                divisibleNum++;
            } else {
                divisibleNum++;
            }
        }
        result[arr[i]] = divisibleArr;
    }
    return result
}

arrayFactors([4, 2, 8, 6, 3, 9]);