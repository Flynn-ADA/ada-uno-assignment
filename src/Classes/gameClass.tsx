export interface CardType {
  type: string;
  value?: string;
  colour?: string;
}

export class Game {
  card: CardType;

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
        return "blue";
    }
  }

  constructor() {
    this.card = {
      type: "",
      value: "",
      colour: "",
    };
  }
  newCard() {
    let newCard = this.card;
    let random = Math.floor(Math.random() * 27) + 1;
    let colour = this.randomColour();

    if (random <= 19) {
      let randomValue = Math.floor(Math.random() * 10).toString();
      newCard.type = "number";
      newCard.value = randomValue;
      newCard.colour = colour;
    } else if (random > 19 && random <= 22) {
      newCard.type = "action";
      newCard.colour = colour;
      newCard.value = "+2";
    } else if (random > 22 && random <= 25) {
      newCard.type = "action";
      newCard.colour = colour;
      newCard.value = "X";
    } else {
      newCard.type = "wildcard";
      newCard.colour =
        "conic-gradient(blue 0deg 90deg, green 90deg 180deg, gold 180deg 270deg, red 270deg 360deg)";
      if (random === 26) {
        newCard.value = "+4";
      }
    }

    return newCard;
  }
}
