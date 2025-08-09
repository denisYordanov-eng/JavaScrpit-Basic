function multiply(input) {
    function multiplyFirstBySecond(num1, num2) {
        let totalSum = num1 * num2;
        return totalSum;
    }
    function multiplySecondByFirst(num1, num2) {
        let sum = num2 * num1;
        return sum;
    }
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);

    if (num1 > num2) {
        let result = multiplySecondByFirst(num1, num2);
        console.log(result);
    }
    else if (num2 >= num1) {
        let result = multiplyFirstBySecond(num1, num2);
        console.log(result);
    }
}
multiply(['3','6']);