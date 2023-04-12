let question = prompt("How many beers woul you like to see on the wall?");

let numOfBeers = Number(question);
let counter = 1;

while (numOfBeers != 0) {
    for (let i = 0; i < numOfBeers; i++) {
        let pronoun;
        if (counter == 1) {
            pronoun = 'it'
        } else {
            pronoun = 'them';
        }
      let secondValue = numOfBeers;
      console.log(`
      ${numOfBeers--} bottles of beer on the wall
      ${secondValue--} bottles of beer
      Take ${counter++} down, pass ${pronoun} around
      ${numOfBeers} bottles of beer on the wall`);
  }
}
