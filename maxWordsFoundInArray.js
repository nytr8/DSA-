function mostWordsFound(sentences) {
  let count = 0;
  for (let i = 0; i < sentences.length; i++) {
    let string = "";
    let arr = [];
    string += sentences[i];
    arr = string.split(" ");
    let count2 = 0;
    for (let j = 0; j < arr.length; j++) {
      count2++;
    }
    if (count2 > count) {
      count = count2;
    }
  }
  return count;
}
console.log(mostWordsFound(["hii hello", "hello hii hii", "you will win"]));