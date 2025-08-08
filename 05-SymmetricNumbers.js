function SymmetricNumbers(num) {
    //make string input as MaxNumber.
    let MaxNumber = Number(num);
    //initialize  output arrayList.
    let palindromesOutput = [];
    //make the logic in for loop from 1 to MaxNumber and initialize i.to string to use reverse method
    //Check if current i variable is equal to reversed i variable.
    for (let i = 1; i <= MaxNumber; i++) {
        let str = i.toString();
        if(str === str.split('').reverse().join('')) {
            palindromesOutput.push(str);
        }
    }
    //Print output.
    console.log(palindromesOutput.join(' '));
}