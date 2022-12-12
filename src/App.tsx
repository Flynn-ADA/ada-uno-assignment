import { Button } from "@mui/material";
import { Player } from "./Classes/PlayerClass";

function App() {
  const player1 = new Player();
  player1.drawCard(7);

  console.log(player1.getHand());

  return (
    <>
      <Button
        sx={{
          height: 50,
          width: 100,
          backgroundColor: "black",
          color: "white",
          justifyContent: "center",
        }}
        onClick={() => {
          player1.drawCard();
          console.log(player1.getHand());
        }}
      >
        DRAW CARD
      </Button>
      {player1.showHand()}
    </>
  );
}

export default App;
