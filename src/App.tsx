import { Button, Grid } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { CardType, UnoCard } from "./Classes/CardClass";
import { Player } from "./Classes/PlayerClass";
import { Pile } from "./Components/PileComponent";
import { RenderUnoCard } from "./Components/UnoCardComponent";

function App() {
  const player1Ref = useRef<Player>(new Player());
  const player2Ref = useRef<Player>(new Player());
  const pile = useRef<Pile>(new Pile());
  const deck = useRef<UnoCard>(new UnoCard());
  const [turnCount, setTurnCount] = useState(0);
  // console.log("FIRST CARD ", firstCard);

  useEffect(() => {
    if (player1Ref.current.getHand().length !== 0) {
      return;
    }

    player1Ref.current.drawCard(7);
    player1Ref.current.playerName = "Player 1";
    player2Ref.current.drawCard(7);
    player2Ref.current.playerName = "Player 2";
    pile.current.setCard(deck.current.newCard());

    setTurnCount(turnCount + 1);
  }, [setTurnCount, turnCount, deck, pile]);

  console.log(player1Ref.current.getHand());

  const [playerTurn, setPlayerTurn] = useState(player1Ref.current);

  console.log(turnCount);
  return (
    <div>
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

      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        position={"absolute"}
        bottom={10}
        wrap="nowrap"
        sx={{ overflow: "auto" }}
      >
        {playerTurn.hand.map((card: CardType) => {
          const cardIndex = playerTurn.hand.indexOf(card);
          return (
            <Grid
              item
              key={cardIndex}
              sx={{
                paddingBottom: 1,
                transition: "top ease 0.3s",
                position: "relative",
                top: 0,
                "&:hover": {
                  top: "-10px",
                  cursor: "pointer",
                },
              }}
            >
              <div
                onClick={() => {
                  if (
                    playerTurn
                      .playableCards(pile.current.cardInPlay)
                      .includes(card)
                  ) {
                    playerTurn.hand.splice(cardIndex, 1);
                    pile.current.setCard(card);
                    setTurnCount(turnCount + 1);
                    if (playerTurn === player1Ref.current) {
                      setPlayerTurn(player2Ref.current);
                    } else {
                      setPlayerTurn(player1Ref.current);
                    }
                  }
                }}
              >
                <RenderUnoCard {...card} />
              </div>
            </Grid>
          );
        })}
      </Grid>

      <div
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
        {playerTurn.playerName}'s turn
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          height: "50vh",
        }}
      >
        {pile.current.renderPile()}
      </div>
      {/* {pile.current.setCard()} */}
    </div>
  );
}

export default App;
