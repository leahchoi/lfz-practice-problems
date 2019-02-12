function targetNum(arr1, arr2, target) {
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    let j = 0;
    for (let i = arr2.length - 1; i >= 0; i--) {
        if (arr1[i] + arr2[j] < target) {
            while (arr1[i] + arr2[j] < target) {
                j++;
                if (arr1[i] + arr2[j] === target) {
                    return [arr1[i], arr2[j]]
                }
            }
        }
    }
}

// targetNum([0, 9, 7, 4], [3, 1, 8, 5], 9)
targetNum([2, 8, 3, 10, 15, 16], [1, 4, 5, 2, 8, 6], 15)