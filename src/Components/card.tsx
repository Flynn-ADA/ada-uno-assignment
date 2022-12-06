import { Card, Grid, Typography } from "@mui/material";
import { CardType } from "../Classes/playerClass";

export const ShowHand = ({ hand }: { hand: CardType[] }) => {
  // console.log(hand);
  return (
    <Grid
      container
      spacing={4}
      display={"flex"}
      alignItems={"flex-end"}
      justifyContent={"center"}
    >
      {hand.map((card) => {
        return (
          <Grid item>
            <UnoCard {...card} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export const UnoCard = (cardInfo: CardType) => {
  return (
    <Card
      elevation={5}
      sx={{ width: 50, height: 100, backgroundColor: cardInfo.colour }}
    >
      <Typography sx={{ color: "white" }}>{cardInfo.value}</Typography>
    </Card>
  );
};
