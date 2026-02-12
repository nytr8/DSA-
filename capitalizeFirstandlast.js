function capitalizeEnds(str) {
  let arr = str.split(" ");
  let newstr = "";

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];

    if (char.length === 1) {
      newstr += " " + char.toUpperCase();
      continue;
    }

    let starting = char.charAt(0).toUpperCase();
    let mid = char.substring(1, char.length - 1);
    let ending = char.charAt(char.length - 1).toUpperCase();

    newstr += " " + (starting + mid + ending);
  }

  return newstr.trim();
}
process.stdout.write(capitalizeEnds("hello world").toString());