import { CardType } from "../Classes/CardClass";
import React from "react";
import { Grid } from "@mui/material";
import { RenderUnoCard } from "./UnoCardComponent";

interface handType {
  hand: CardType[];
}

export class ShowHand extends React.Component<handType> {
  render() {
    const { hand } = this.props;
    console.log("Rendering Hand ", hand);
    return (
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        position={"absolute"}
        bottom={10}
        wrap="nowrap"
        sx={{ overflow: "auto" }}
      >
        {hand.map((card: CardType) => {
          const cardIndex = hand.indexOf(card);
          return (
            <Grid item key={cardIndex} sx={{ paddingBottom: 1 }}>
              <RenderUnoCard {...card} />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}
