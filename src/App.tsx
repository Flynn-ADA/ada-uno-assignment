import { Box, Button } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { UnoCard } from "./Classes/CardClass";
import { Player } from "./Classes/PlayerClass";
import { Pile } from "./Components/PileComponent";

function App() {
  const player1Ref = useRef<Player>(new Player());
  const player2Ref = useRef<Player>(new Player());
  const pile = useRef<Pile>(new Pile());
  const deck = useRef<UnoCard>(new UnoCard());
  const [turnCount, setTurnCount] = useState(0);
  let currentPlayer = "";
  // console.log("FIRST CARD ", firstCard);

  useEffect(() => {
    if (player1Ref.current.getHand().length !== 0) {
      return;
    }

    player1Ref.current.drawCard(7);
    player2Ref.current.drawCard(7);
    pile.current.setCard(deck.current.newCard());

    setTurnCount(turnCount + 1);
  }, [setTurnCount, turnCount, deck, pile]);

  console.log(player1Ref.current.getHand());

  const [playerTurn, setPlayerTurn] = useState(player1Ref.current);

  return (
    <>
      <Button
        sx={{
          height: 50,
          width: 100,
          backgroundColor: "black",
          color: "white",
          justifyContent: "center",
          margin: "3px",
        }}
        onClick={() => {
          playerTurn.drawCard();
          console.log(playerTurn.getHand());
          setTurnCount(turnCount + 1);
        }}
      >
        Draw Card
      </Button>

      <Button
        sx={{
          height: 50,
          width: 100,
          backgroundColor: "black",
          color: "white",
          justifyContent: "center",
          margin: "3px",
        }}
        onClick={() => {
          if (playerTurn === player1Ref.current) {
            setPlayerTurn(player2Ref.current);
          } else {
            setPlayerTurn(player1Ref.current);
          }
        }}
      >
        Change Player
        {currentPlayer}
      </Button>
      {playerTurn.getHand().length}
      {playerTurn.showHand()}
      <div
        style={{
          border: "2px solid black",
          justifyContent: "center",
          position: "absolute",
          background: "black",
          bottom: "10",
        }}
      >
        {pile.current.renderPile()}
      </div>
    </>
  );
}

export default App;
