function objToJsonString(input) {
    let inputLine;
    if(typeof input === "string"){
         inputLine = input.split('\n');
    } else if (Array.isArray(input)){
        inputLine = input;
    }
    let obj = {};
   for(let item of inputLine){
       let kvp = item.split(' -> ');

       if(kvp.length !== 2){
           continue;
       }

        let key = kvp[0];
       let value = kvp[1];
       if(key === 'grade'){
           obj[key] = Number(value);
       }else if(key === 'age'){
           obj[key] = Number(value);
       }else {
           obj[key] = value;
       }
   }
   console.log(JSON.stringify(obj));
}
objToJsonString("name -> Angel\n" +
    "surname -> Georgiev\n" +
    "age -> 20\n" +
    "grade -> 6.00\n" +
    "date -> 23/05/1995\n" +
    "town -> Sofia")