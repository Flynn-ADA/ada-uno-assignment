import { Grid, Paper, Typography } from "@mui/material";
import { relative } from "path";
import { Component } from "react";
import { CardType } from "../Classes/gameClass";

export const ShowHand = ({ hand }: { hand: CardType[] }) => {
  // console.log(hand);
  return (
    <Grid
      container
      direction={"row"}
      spacing={2}
      alignItems={"flex-end"}
      justifyContent={"center"}
      minHeight={"100vh"}
    >
      {hand.map((card) => {
        return (
          <Grid item>
            <RenderUnoCard {...card} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export const RenderUnoCard = (cardInfo: CardType) => {
  return (
    <Paper
      elevation={5}
      // variant="outlined"

      sx={{
        width: "8vw",
        height: "15vw",
        background: cardInfo.colour,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: 0,
        top: 0,
        position: "relative",
        transition: "top ease 0.5s",
        "&:hover": {
          boxShadow: 8,
          top: "-50px",
        },
      }}
    >
      <Typography component="div" fontSize={"5vw"} sx={{ color: "white" }}>
        {cardInfo.value}
      </Typography>
    </Paper>
  );
};
