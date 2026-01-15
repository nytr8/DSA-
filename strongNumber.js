function isStrongNumber(n) {
  let numLength = String(n).length;
  let num = n;
  let sum = 0;
  while (numLength !== 0) {
    let num1 = n % 10;
    n = Math.trunc(n / 10);
    let storedNum = 1;
    for (let i = 1; i <= num1; i++) {
      storedNum *= i;
    }
    sum += storedNum;
    numLength--;
  }
  if (num === sum) {
    return "Yes";
  } else {
    return "No";
  }
}
