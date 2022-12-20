import { Button, Grid } from "@mui/material";
import { CardType } from "../Classes/CardClass";
import { RenderUnoCard } from "./UnoCardComponent";

export class Pile {
  cardInPlay: CardType;

  constructor() {
    this.cardInPlay = { type: "" };
  }

  setCard(card: CardType) {
    this.cardInPlay = card;
  }

  renderPile() {
    return <RenderUnoCard {...this.cardInPlay} />;
  }
}
