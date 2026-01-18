function printRightTriangle(n) {
  for (var i = 1; i <= n; i++) {
    for (var j = i; j > 0; j--) {
      process.stdout.write("*");
      process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
}
