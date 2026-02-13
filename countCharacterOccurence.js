function characterFrequency(str) {
  let strArr = str.split(" ");
  let newStr = "";
  for (let i = 0; i < strArr.length; i++) {
    newStr += strArr[i];
  }

  let arr = new Array(127);

  for (let i = 0; i < 128; i++) {
    arr[i] = 0;
  }

  for (let j = 0; j < arr.length; j++) {
    let count = 0;
    for (let k = 0; k < newStr.length; k++) {
      if (j === newStr.charCodeAt(k)) {
        count++;
        arr[j] = count;
      }
    }

    if (count > 0) {
      process.stdout.write(`${String.fromCharCode(j)}: ${count}\n`);
    }
  }
}

characterFrequency("hello world");
