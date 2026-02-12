function countPrefixMatch(words, pref) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    let str = words[i];
    if (str.startsWith(pref)) {
      count++;
    }
  }
  return count;
}

process.stdout.write(countPrefixMatch(["pay", "attention", "practice", "attend"], "at").toString());
