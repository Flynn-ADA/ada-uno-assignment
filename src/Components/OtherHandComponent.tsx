import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import { CardType } from "../Classes/CardClass";

interface handType {
  hand: CardType[];
}

export class OtherHand extends React.Component<handType> {
  render() {
    const { hand } = this.props;
    return (
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        position={"absolute"}
        top={10}
        wrap="nowrap"
        sx={{ overflow: "auto" }}
      >
        {hand.map((card) => {
          return (
            <Grid item key={hand.indexOf(card)} sx={{ paddingBottom: 5 }}>
              <Card
                elevation={5}
                sx={{
                  width: "75px",
                  height: "140px",
                  minWidth: 30,
                  minHeight: 30 * (7.5 / 4),
                  background: "black",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: 0,
                  top: 0,
                  position: "relative",
                  border: "5px solid white",
                  borderRadius: 2,
                  outline: "0.5px solid black",
                }}
              >
                <Typography
                  fontSize={"30px"}
                  sx={{
                    color: "yellow",
                    borderRadius: "50%",
                    textShadow: "1px 1px 2px black;",
                    width: "90%",
                    height: "80%",
                    display: "flex",
                    background: "red",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                  }}
                >
                  ADA
                </Typography>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    );
  }
}
