function findGreatestElementAndIndex(arr) {
  let max = arr[0];
  let index = 0;
  for (var i = 1; i <= arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      index = i;
    }
  }
  return [max, index];
}
