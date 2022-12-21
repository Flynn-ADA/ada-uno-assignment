export interface CardType {
  //type for each card
  type: string; //number, skip or +2
  value?: string; //value to appear on the card
  colour?: string; //colour of the card
  used?: boolean; //has the card been used (+2 and skip card)
}

export class UnoCard {
  //uno card class
  card: CardType;

  constructor() {
    this.card = { type: "" }; //default card
  }

  private randomColour() {
    //Encapsulation
    //random colour function
    let randomColour = Math.floor(Math.random() * 4).toString(); //generate random number between 0 and 3 inclusive
    switch (randomColour) {
      case "0":
        return "red";
      case "1":
        return "gold"; //less bright that yellow
      case "2":
        return "green";
      case "3":
        return "royalblue"; //better blue than standard blue
    }
  }

  newCard() {
    let random = Math.floor(Math.random() * 27) + 1; //Previously was going to create wild cards like +4 and colour change, and this would've been the correct ratio for these cards.
    let colour = this.randomColour(); //generate random colour

    if (random <= 23) {
      //number card
      let randomNumber = Math.floor(Math.random() * 10).toString(); //generate number value for card
      this.card.type = "number";
      this.card.value = randomNumber;
      this.card.colour = colour;
    } else if (random > 23 && random <= 25) {
      //+2 card
      this.card.type = "plusTwo";
      this.card.colour = colour;
      this.card.value = "+2";
      this.card.used = false; //default is hasn't been used yet
    } else {
      //Skip card, this has no value as the 'value' is a MUI icon, applied on rendering
      this.card.type = "skip";
      this.card.colour = colour;
      this.card.used = false;
    }

    return this.card; //return card
  }
}
