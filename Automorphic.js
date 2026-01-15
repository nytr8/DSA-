function isAutomorphic(n) {
  let numLength = String(n).length;
  let sqrNum = n * n;
  if (n == 0 || n == 1) {
    return "Yes";
  }
  for (var i = 0; i < numLength; i++) {
    let lastDigitOfEnteredNum = n % 10;
    let lastDigitOfsqrNum = sqrNum % 10;
    n = Math.floor(n / 10);
    sqrNum = Math.floor(sqrNum / 10);
    if (lastDigitOfsqrNum !== lastDigitOfEnteredNum) {
      return "no";
      break;
    }
  }
  return "Yes";
}
