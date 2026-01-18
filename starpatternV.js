function printVShapePattern(n) {
  for (var i = 1; i <= n; i++) {
    for (var j = i - 1; j > 0; j--) {
      process.stdout.write(" ");
    }
    process.stdout.write("*");

    for (var k = n * 2 - 3 - 2 * (i - 1); k >= 1; k--) {
      process.stdout.write(" ");
    }
    if (i !== n) {
      process.stdout.write("*");
    }

    process.stdout.write("\n");
  }
}
