import { Button, Paper } from "@mui/material";
import { Player } from "./Classes/playerClass";
import { ShowHand } from "./Components/styledCard";

function App() {
  const player1 = new Player();
  player1.drawCard(7);

  console.log(player1.hand);

  return (
    <Paper variant="outlined">
      <Button
        sx={{
          height: 50,
          width: 50,
          backgroundColor: "hotpink",
          color: "white",
        }}
        onClick={() => {
          player1.drawCard();
          console.log(player1.hand);
        }}
      >
        NEW CARD
      </Button>
      <ShowHand hand={player1.hand} />
    </Paper>
  );
}

export default App;
