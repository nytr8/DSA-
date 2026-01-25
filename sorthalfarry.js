function sortHalf(arr) {
  for (var i = 0; i < Math.floor(arr.length / 2); i++) {
    for (let j = i + 1; j < Math.floor(arr.length / 2); j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  for (let i = Math.floor(arr.length / 2); i < arr.length; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[i] < arr[k]) {
        let temp = arr[k];
        arr[k] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}
