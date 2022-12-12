import { CardType } from "./CardClass";
import { UnoCard } from "./CardClass";
import { ShowHand } from "../Components/ShowHandComponent";

export class Player {
  hand: CardType[];

  constructor() {
    this.hand = [];
  }

  drawCard(num?: number) {
    console.log("DRAWN CARD");
    if (!num) num = 1;
    for (let i = 0; i < num; i++) {
      let unoCard = new UnoCard();
      this.hand.push(unoCard.newCard());
    }
    this.showHand();
  }

  getHand() {
    return this.hand;
  }

  showHand() {
    return <ShowHand hand={this.hand} />;
  }
}
