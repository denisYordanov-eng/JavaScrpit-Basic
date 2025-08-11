function kvp(input) {
    let dict = {};
    for (let i = 0; i < input.length - 1; i++) {
        let kvp = input[i].split(' ');
        let key = kvp[0];
        let value = kvp[1];
        dict[key] = value;
    }
    let wantedKey = input[input.length - 1];
    if(dict[wantedKey] === undefined ) {
        console.log("None");
    }else {

        console.log(dict[wantedKey]);
    }
}
kvp(['3 test', '3 test1','4 test2','4 test3','4 test5','4']);
