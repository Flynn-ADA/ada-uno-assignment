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

    if (random <= 19) {
      let randomNumber = Math.floor(Math.random() * 10).toString();
      this.card.type = "number";
      this.card.value = randomNumber;
      this.card.colour = colour;
    } else if (random > 19 && random <= 22) {
      this.card.type = "plusTwo";
      this.card.colour = colour;
      this.card.value = "+2";
      this.card.used = false;
    } else if (random > 22 && random <= 25) {
      this.card.type = "skip";
      this.card.colour = colour;
    } else {
      this.card.type = "wild";
      this.card.colour =
        "conic-gradient(blue 0deg 90deg, green 90deg 180deg, gold 180deg 270deg, red 270deg 360deg)";
      if (random === 26) {
        this.card.value = "+4";
        this.card.type = "wildDraw4";
      }
    }

    return this.card;
  }
}
