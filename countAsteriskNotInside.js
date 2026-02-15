function countAsterisks(s) {
  let count = 0;
  let inside = false;
  for (let i = 0; i < s.length; i++) {
    if (inside == false && s.charAt(i) == "*") {
      count++;
    }

    if (s.charAt(i) === "|") {
      inside = !inside;
    }
  }
  return count;
}
