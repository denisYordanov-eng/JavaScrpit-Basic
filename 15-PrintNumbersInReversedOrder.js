function reveseNumbers(input) {
  let str = input.join(' ');

 let reversedElements = str.split(' ').reverse((a,b) =>b.localeCompare(a));

  console.log(reversedElements.join('\n'));
  }



