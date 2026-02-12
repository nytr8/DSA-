// let a = "dOg";
// let cased = "";
// for (let i = 0; i < a.length; i++) {
//   let lower = a.toLowerCase();
//   if (a.charAt(i) === lower.charAt(i)) {
//     cased += a.charAt(i).toUpperCase();
//   } else {
//     cased += a.charAt(i).toLowerCase();
//   }
// }
// process.stdout.write(cased);
let str = "DssDDDS123";
let cased = "";
for (let i = 0; i < str.length; i++) {
  if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
    cased += String.fromCharCode(str.charCodeAt(i) + 32);
  } else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
    cased += String.fromCharCode(str.charCodeAt(i) - 32);
  } else {
    cased += str.charAt(i);
  }
}
process.stdout.write(cased);
