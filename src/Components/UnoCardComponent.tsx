import { Card, Typography } from "@mui/material";
import BlockIcon from "@mui/icons-material/Block";
import { CardType } from "../Classes/CardClass";
import React from "react";

export class RenderUnoCard extends React.Component<CardType> {
  //Card component extending the react component class
  render() {
    //render
    let cardInfo = this.props; //assigning the props to a value
    return (
      <Card
        elevation={5}
        sx={{
          width: "75px",
          height: "140px",
          minWidth: 30,
          minHeight: 30 * (7.5 / 4),
          background: cardInfo.colour,
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
        {/*Render card with styling*/}
        {/*If card isn't a skip card*/}
        {(cardInfo.type === "plusTwo" || cardInfo.type === "number") && (
          <Typography
            fontSize={"50px"}
            sx={{
              color: cardInfo.colour,
              borderRadius: "50%",
              width: "90%",
              height: "80%",
              display: "flex",
              background: "#fff",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            {/*Apply text value with styling*/}
            {cardInfo.value}
          </Typography>
        )}
        {/*If card is a skip card*/}
        {cardInfo.type === "skip" && (
          <BlockIcon
            sx={{
              color: cardInfo.colour,
              borderRadius: "50%",
              width: "90%",
              height: "80%",
              display: "flex",
              background: "#fff",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        )}
        {/*Add skip icon to card*/}
      </Card>
    );
  }
}
