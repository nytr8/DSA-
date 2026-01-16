class Solution {
  is_harshad(nStr) {
    let n = nStr;
    let sum = 0;
    while (nStr !== 0) {
      let newNum = nStr % 10;
      sum += newNum;
      nStr = Math.floor(nStr / 10);
    }
    if (n % sum == 0) {
      return "Harshad Number";
    }
    return "Not Harshad Number";
  }
}
