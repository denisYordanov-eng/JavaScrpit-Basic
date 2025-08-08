function threeIntegers(input) {
    let inputLine = input[0];
   let numbArray = inputLine.split(" ").map(Number);

   //Initialize numbers from elements of array.
   let num1 = (numbArray[0])
   let num2 = (numbArray[1]);
   let num3 = (numbArray[2]);
// Make the logic and Print the output.
    if (num1 + num2 === num3) {
         console.log(`${Math.min(num1, num2)} + ${Math.max(num1,num2)} = ${num3}`);
    }
    else if (num2 + num3 === num1) {
         console.log(`${Math.min(num2, num3)} + ${Math.max(num2,num3)} = ${num1}`);
    }
    else if (num1 + num3 === num2) {
        console.log(`${Math.min(num1,num3)} + ${Math.max(num1,num3)} = ${num2}`);
    }
    else {
        console.log("No");
    }
}