function multipleKvp(input) {
    let dict = {};
    for (let i = 0; i < input.length - 1; i++) {
        let kvp = input[i].split(' ');
        if(kvp.length !== 2) {
            continue;
        }
        let key = kvp[0];
        let value = kvp[1];
         if(!dict[key]) {
            dict[key] = [];
        }
         dict[key].push(value);
    }
    let wantedKey = input[input.length - 1];
    if(dict[wantedKey] === undefined ) {
        console.log("None");
    }else {
        console.log(dict[wantedKey].join('\n'));
    }
}
multipleKvp(['key value','key eulav','test tset','key']);