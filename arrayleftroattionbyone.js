function leftRotateByOne(arr) {
  let firstElem = arr[0];
  let i = 0;
  arr[arr.length] = firstElem;
  while (i < arr.length) {
    arr[i] = arr[i + 1];
    i++;
  }
  arr.length = arr.length - 1;

  return arr;
}
