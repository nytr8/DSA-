function power(num, powr) {
  let val = 1;
  for (let i = 0; i < powr; i++) {
    val = val * num;
  }
  return val;
}
let val = power(33, 2);
console.log(val);
