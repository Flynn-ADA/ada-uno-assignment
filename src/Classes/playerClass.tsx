import { CardType } from "./CardClass"; //import card class type
import { UnoCard } from "./CardClass"; //import uno class

export class Player {
  hand: CardType[]; //array of cards
  playerName: string; //player name

  constructor() {
    this.hand = []; // default empty hand
    this.playerName = ""; //default blank name
  }

  drawCard(num: number) {
    //draw a given number of cards
    for (let i = 0; i < num; i++) {
      let unoCard = new UnoCard();
      this.hand.push(unoCard.newCard()); //add newly generated card to the player's hand
    }
  }

  getHand() {
    return this.hand; //return the player's hand
  }

  playableCards(cardInPlay: CardType) {
    //returns an array of cards that are playable to a given card
    let playable: CardType[] = [];
    this.hand.map((card: CardType) => {
      //for each card in the players hand
      if (
        cardInPlay.type === "number" && //if the given card is a number
        (card.colour === cardInPlay.colour || card.value === cardInPlay.value) //if the card is a number and either the colour/value are the same
      ) {
        playable.push(card); //push the card to the 'playable' array
      }

      if (cardInPlay.type !== "number" && cardInPlay.used === true) {
        //if the given card is not a number and it's 'trick' (+2 or skip) has been used
        if (
          card.colour === cardInPlay.colour || // allow other card to be played
          card.value === cardInPlay.value
        ) {
          playable.push(card);
        }
      }

      if (cardInPlay.type !== "number" && card.type === cardInPlay.type) {
        //if the card is not a number and the card types are the same (+2 or skip)
        playable.push(card);
      }

      return playable; //return the playable array
    });
    return playable; //return the playable array
  }

  newHand() {
    this.hand = []; //clear the player's hand
    this.drawCard(7); //draw 7 new cards
  }
}
