function minAddForBalance(arr) {
  let suml = 0;
  let sumr = 0;
  for (var i = 0; i < arr.length / 2; i++) {
    suml += arr[i];
  }
  for (var j = arr.length / 2; j < arr.length; j++) {
    sumr += arr[j];
  }
  if (suml > sumr) {
    return Math.abs(suml - sumr);
  } else {
    return Math.abs(sumr - suml);
  }
}
