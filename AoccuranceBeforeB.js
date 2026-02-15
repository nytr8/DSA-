function checkString(s) {
  let checker = false;
  if (s.length == 1) {
    if (s.charAt(0) == "a" || s.charAt(0) == "b") {
      return true;
    }
  }

  for (let i = 0; i < s.length - 1; i++) {
    if (s.charCodeAt(i) <= s.charCodeAt(i + 1)) {
      checker = true;
    } else {
      checker = false;
      break;
    }
  }
  return checker;
}
