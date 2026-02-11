function isPalindromeInPlace(str) {
  let i = 0;
  let j = str.length - 1;
  if (str == "" || str.length == 1) {
    return "Yes";
  }
  while (i < j) {
    if (str.charAt(i) !== str.charAt(j)) {
      return "No";
    }
    i++;
    j--;
  }
  return "Yes";
}

process.stdout.write(isPalindromeInPlace("malayalam"));
