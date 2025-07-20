function a() {
  const readlineSync = require("readline-sync");

  let input = readlineSync.question("Input: ");
  let numbers = input.split(" ").map(Number);
  let evennumber = numbers.filter((x) => x % 2 == 0);
  console.log(evennumber);
  let maxnum = -1000000000;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxnum) {
      maxnum = numbers[i];
    }
  }
  console.log(maxnum);
  let newarr = numbers.filter((x) => x > 0);
  console.log(newarr);
}
a();
