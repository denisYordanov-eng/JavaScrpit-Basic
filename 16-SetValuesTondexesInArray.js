function setValuesToIndexesInArray(input) {
let n = Number(input[0]);
    let arr = [];

    for (let i = 1; i < input.length ; i++) {
        let kvp = input[i].split(' - ');
        let index = Number(kvp[0]);
        let value = kvp[1];

        arr[index] = value;
    }
  for(let j = 0; j < n; j++ ) {
      if(arr[j] == undefined){
          console.log(0);
      }else {
          console.log(arr[j]);
      }
  }
}
