import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import { CardType } from "../Classes/CardClass";

interface handType {
  hand: CardType[]; //array of cards
}

export class OtherHand extends React.Component<handType> {
  //Show the back of the other players cards
  render() {
    const { hand } = this.props; //assigning and destructuring of passed props
    return (
      <Grid //mui grid
        container //of variant 'container'
        spacing={2} //card spacing
        justifyContent={"center"} //center cards to the middle of the screen
        position={"absolute"} //absolute positioning (allow to move anywhere on the screen)
        top={10} //position at the bottom of the screen
        wrap="nowrap" //do not move cards on to the next row if row overflows
        sx={{ overflow: "auto" }} //allow user to scroll through their cards if they overflow
      >
        {hand.map((card) => {
          //for each card in the users hand
          return (
            <Grid item key={hand.indexOf(card)} sx={{ paddingBottom: 5 }}>
              {" "}
              {/*add grid item*/}
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
                {" "}
                {/*add card with styling */}
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
                  {" "}
                  {/*add card value with styling */}
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
