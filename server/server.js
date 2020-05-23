const express = require('express');
const app = express();
const router = express.Router();

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two']
let numValues = [11, 10, 10, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2]

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
app.get('/deck', (req, res) => res.send(createDeck()))





app.listen(8080)
