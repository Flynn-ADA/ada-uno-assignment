import { Card } from "@mui/material";
import { CardType, Player } from "./Classes/playerClass";
import { UnoCard } from "./Components/card";
import { ShowHand } from "./Components/card";

function App() {
  const player1 = new Player();
  player1.drawCard(7);

  const player2 = new Player();
  player2.drawCard(3);

  console.log(player1.hand);

  return (
    <div>
      <ShowHand hand={player1.hand} />
    </div>
  );
}

export default App;
