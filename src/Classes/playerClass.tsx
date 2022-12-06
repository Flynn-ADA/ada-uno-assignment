export interface CardType {
  value?: number;
  colour?: string;
  isAction?: boolean;
  isWildcard?: boolean;
}

export class Player {
  hand: CardType[];

  constructor() {
    this.hand = [];
  }

  drawCard(num?: number) {
    if (!num) num = 1;
    let newCard = {
      value: 9,
      colour: "limegreen",
    };
    for (let i = 0; i < num; i++) this.hand.push(newCard);
    return this.hand;
  }
}
