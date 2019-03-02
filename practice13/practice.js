// - math_sequences(2, 5);

// And the resulting output:
// -["2+5=7", "2-5=-3", "2*5=10", "2/5=0.4"];

function math_sequences(num1, num2) {
    let result = [];
    let op = ['+', '-', '/', '*'];
    for (let i = 0; i < op.length; i++) {
        let equation = num1 + op[i] + num2;
        result.push(`${num1} ${op[i]} ${num2} = ` + eval(equation))
    }
    return result;
}