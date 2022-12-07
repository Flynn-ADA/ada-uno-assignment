import { CardType } from "./gameClass";
import { Game } from "./gameClass";

export class Player {
  hand: CardType[];

  constructor() {
    this.hand = [];
  }

  drawCard(num?: number) {
    console.log("DRAWN CARD");
    if (!num) num = 1;
    for (let i = 0; i < num; i++) {
      let game = new Game();
      this.hand.push(game.newCard());
    }
    return this.hand;
  }
}
