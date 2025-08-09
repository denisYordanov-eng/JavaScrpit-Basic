function findPositiveOrNegative(input) {
    let firstElement = input[0];
    let secondElement = input[1];
    let thirdElement = input[2];

   let arr = [firstElement, secondElement, thirdElement];

   let negativeCounter = 0;
    for (let element of arr) {
        if(element.startsWith("-")) {
            negativeCounter++;
        }
    }
    if (negativeCounter % 2 === 0) {
        console.log("Positive");
    }else {
        console.log("Negative");
    }
}