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
    console.log("HGAHAGAGAGGAGAGGAG => ", hand);
    return (
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        marginTop={"auto"}
        position={"absolute"}
        bottom={10}
      >
        {hand.map((card: CardType) => {
          return (
            <Grid item key={hand.indexOf(card)}>
              <RenderUnoCard {...card} />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}
