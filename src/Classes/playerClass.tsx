import { CardType } from "./CardClass";
import { UnoCard } from "./CardClass";

import { RenderUnoCard } from "../Components/UnoCardComponent";
import { Grid } from "@mui/material";

export class Player {
  hand: CardType[];
  playerName: string;

  constructor() {
    this.hand = [];
    this.playerName = "";
  }

  drawCard(num: number) {
    console.log("DRAWN CARD");

    for (let i = 0; i < num; i++) {
      let unoCard = new UnoCard();
      this.hand.push(unoCard.newCard());
    }
  }

  getHand() {
    return this.hand;
  }

  playableCards(cardInPlay: CardType) {
    let playable: CardType[] = [];
    this.hand.map((card: CardType) => {
      if (
        cardInPlay.used !== false &&
        (card.type === "wild" || card.type === "wildDraw4")
      ) {
        playable.push(card);
      }
      if (
        cardInPlay.used !== false &&
        (card.colour === cardInPlay.colour || card.value === cardInPlay.value)
      ) {
        playable.push(card);
      }
      if (cardInPlay.type !== "number" && cardInPlay.type === card.type) {
        playable.push(card);
      }
      return playable;
    });
    return playable;
  }
}
