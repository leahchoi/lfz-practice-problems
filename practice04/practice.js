function sort(array) {
    let j = 0;
    while (j < array.length) {
        for (let i = 0; i < array.length - j - 1; i++) {
            let temp;
            if (array[i] > array[i + 1]) {
                temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
        j++;
    }
    return array;
}

sort(['cat', 'dog', 'human', 'mouse']);