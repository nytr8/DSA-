function findSecondGreatestElement(arr) {
  let max = arr[0];
  let smax = arr[1];
  for (var i = 1; i <= arr.length; i++) {
    if (max < arr[i]) {
      smax = max;
      max = arr[i];
    } else if (smax < arr[i]) {
      smax = arr[i];
    }
  }
  return smax;
}
