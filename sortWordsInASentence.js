function sortSentence(s) {
  let arr = s.split(" ");
  let n = s.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr.join(" ");
}
console.log(sortSentence("taj mahal is situated at Agra"));
