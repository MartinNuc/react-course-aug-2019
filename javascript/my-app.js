
let text = 'Hi my name is Martin';

let nejkratsi = text.split(' ')
  .map(slovo => slovo.length)
  .reduce((zatimNejvetsi, curr) =>
    curr < zatimNejvetsi ? curr : zatimNejvetsi
  , Number.MAX_SAFE_INTEGER);
console.log(nejkratsi);