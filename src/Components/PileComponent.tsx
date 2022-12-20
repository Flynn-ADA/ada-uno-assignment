import { CardType } from "../Classes/CardClass";
import { RenderUnoCard } from "./UnoCardComponent";

export class Pile {
  cardInPlay: CardType;

  constructor() {
    this.cardInPlay = { type: "" }; //default card
  }

  setCard(card: CardType) {
    this.cardInPlay = card; //set the current card to given card
  }

  renderPile() {
    return <RenderUnoCard {...this.cardInPlay} />; //render the current card in play
  }
}
