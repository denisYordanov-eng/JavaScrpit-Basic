function takeUpperCaseStrings(input) {
    let text = input.join(" ");
    let  words = text.split(/[^a-zA-Z]+/);
    let  upperCaseWords =words
        .filter(w => w === w.toUpperCase() &&
            w.length != 0);

    console.log(upperCaseWords.join(", "));
}