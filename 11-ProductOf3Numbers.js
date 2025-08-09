function  findPositiveOrNegativeResultMultiply3Numbers(input){
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let num3 = Number(input[2]);


    let arr =[num1, num2, num3];

        let counter = 0;
        for (let i = 0; i < arr.length; i++){
            if(arr[i] < 0){
                counter++;
            }
        }

    if (counter % 2 === 0){
        console.log("Positive");
    }else {
        console.log("Negative");
    }
}
findPositiveOrNegativeResultMultiply3Numbers(['2','3','-1']);