//Fizz buzz
//3 6 9 12 ... fizz
//5 15 18 20 ... buzz
//15 30 45 ... fizzbuzz

for (let i = 1; i < 108; i++) {
  if (i % 15 === 0) {
    console.log(`${i} Fizz Buzz`)
  }
  if (i % 3 === 0) {
    console.log(`${i} fizz`);
  }else if (i % 5 === 0) {
    console.log(`${i} bozz`)
  }
  
}
