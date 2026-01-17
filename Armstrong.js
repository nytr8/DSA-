function is_armstrong(nStr) {
  let count = 0;
  let snum = nStr;
  let sum = 0;
  if (nStr < 0) {
    return "Not Armstrong";
  }
  while (nStr !== 0) {
    count++;
    nStr = Math.trunc(nStr / 10);
  }
  nStr = snum;
  while (nStr !== 0) {
    let num = nStr % 10;
    let newNum = 1;
    for (var i = 1; i <= count; i++) {
      newNum = num * newNum;
    }
    sum += newNum;
    nStr = Math.trunc(nStr / 10);
  }
  if (snum == sum) {
    return "Armstrong";
  }
  return "Not Armstrong";
}
