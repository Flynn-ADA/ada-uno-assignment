import { Card, Typography } from "@mui/material";
import BlockIcon from "@mui/icons-material/Block";
import { CardType } from "../Classes/CardClass";
import React from "react";

export class RenderUnoCard extends React.Component<CardType> {
  render() {
    let cardInfo = this.props;
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
          transition: "transform ease 0.3s",
          border: "5px solid white",
          borderRadius: 2,
          outline: "0.5px solid black",
          "&:hover": {
            boxShadow: 5,
            transform: "rotate(5deg)",
            cursor: "pointer",
          },
        }}
      >
        {cardInfo.type !== "skip" && cardInfo.type !== "wild" && (
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
            {cardInfo.value}
          </Typography>
        )}

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
      </Card>
    );
  }
}
