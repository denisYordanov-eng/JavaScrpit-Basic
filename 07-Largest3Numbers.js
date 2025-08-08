function sortBiggest3Numbers(input) {
    let biggest3Numbers = input.map(Number)
        .sort((a, b) => b - a)
        .slice(0,3)
        .join("\r\n");
    console.log(biggest3Numbers);
}
