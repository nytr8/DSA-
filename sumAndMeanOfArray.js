function calculateSumAndMean(arr, n) {
  let sum = 0;
  let mean = 0;

  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  mean = (sum / arr.length).toFixed(1);
  return [sum, mean];
}
