function multiplyPrevNext(num, arr) {
  let i = 0;
  for (let index = 0; index < arr.length; index++) {
    if (num == arr[index]) {
      i = index;
      return i;
      break;
    }
  }
}
multiplyPrevNext(3, [1, 2, 3, 4, 5]);
