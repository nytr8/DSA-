function is_neon(nStr) {
  let sum = 0;
  let num = nStr;
  let sqrNum = nStr * nStr;
  if (nStr == 0 || nStr == 1) {
    return "Yes";
  }
  while (sqrNum !== 0) {
    sum += sqrNum % 10;

    sqrNum = Math.floor(sqrNum / 10);
  }
  if (sum == nStr) {
    return "Yes";
  }
  return "No";
}
