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

  drawCard(num?: number) {
    console.log("DRAWN CARD");
    if (!num) num = 1;
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
        card.colour === cardInPlay.colour ||
        card.value === cardInPlay.value
      ) {
        playable.push(card);
      }
    });
    return playable;
  }
}
