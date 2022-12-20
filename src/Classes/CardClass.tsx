export interface CardType {
  type: string;
  value?: string;
  colour?: string;
  used?: boolean;
}

export class UnoCard {
  card: CardType;

  constructor() {
    this.card = { type: "" };
  }

  private randomColour() {
    let randomColour = Math.floor(Math.random() * 4).toString();
    switch (randomColour) {
      case "0":
        return "red";
      case "1":
        return "gold";
      case "2":
        return "green";
      case "3":
        return "royalblue";
    }
  }

  newCard() {
    let random = Math.floor(Math.random() * 27) + 1;
    let colour = this.randomColour();

    if (random <= 23) {
      let randomNumber = Math.floor(Math.random() * 10).toString();
      this.card.type = "number";
      this.card.value = randomNumber;
      this.card.colour = colour;
    } else if (random > 23 && random <= 25) {
      this.card.type = "plusTwo";
      this.card.colour = colour;
      this.card.value = "+2";
      this.card.used = false;
    } else {
      this.card.type = "skip";
      this.card.colour = colour;
      this.card.used = false;
    }

    return this.card;
  }
}
