function printCommands(input){

    for (let command of input) {
        if (command === "Stop"){
            return;
        }
        console.log(command);
    }
}
