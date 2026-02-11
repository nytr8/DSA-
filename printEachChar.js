function printEachChar(str) {
  for (let i = 0; i < str.length; i++) {
    process.stdout.write(`${str.charAt(i)}\n`);
  }
}
printEachChar("start")