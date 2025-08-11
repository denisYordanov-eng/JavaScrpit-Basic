function addRemoveElements(input) {

    let array = [];

    for (let i = 0; i < input.length; i++) {
        let parts = input[i].split(' ').filter(e => e);

        if (parts.length < 2) {
            continue
        }

        let command = parts[0];
        let value = parts[1];

        if (command === 'add') {
            array.push(value);
        } else if (command === 'remove') {
            array.splice(value,1);
        }
    }
    for (let j = 0; j < array.length; j++) {
        console.log(array[j]);
    }
}

addRemoveElements(['add 3', 'add 5', 'remove 1', 'add2']);

