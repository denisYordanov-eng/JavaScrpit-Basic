function parseJson(input) {
    //let inputJson = input.trim().split('\n');
    for (let info of input) {
        let obj = JSON.parse(info);
        console.log(`Name: ${obj.name}`);
        console.log(`Age: ${obj.age}`);
        console.log(`Date: ${obj.date}`)
    }
}
