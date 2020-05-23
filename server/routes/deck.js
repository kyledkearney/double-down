

function createDeck() {
  let deck = [];
  for (let suitsIDX = 0; suitsIDX < suits.length; suitsIDX++) {
      for (let valuesIDX = 0; valuesIDX < values.length; valuesIDX++) {
          let card = {
              suit: suits[suitsIDX],
              value: values[valuesIDX],
              numValue: numValues[valuesIDX],
              show: true,
          };
          deck.push(card)
      }
       
 }
 for(let i = deck.length -1; i > 0; i--) {
  const j = Math.floor(Math.random()* i)
  const temp = deck[i]
  deck[i] = deck[j]
  deck[j] = temp
}
 return deck;

};
