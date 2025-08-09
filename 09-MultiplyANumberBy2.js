function numMultiplyBy2(arr) {
    let num = Number(arr[0]);
    function multiply(num) {
        let sum = num * 2;
        return sum ;
    }
    let result = multiply(num);
    console.log(result);
}

numMultiplyBy2(['2'])