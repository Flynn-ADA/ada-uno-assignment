import { Button, Grid, Typography } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { CardType, UnoCard } from "./Classes/CardClass";
import { Player } from "./Classes/PlayerClass";
import { OtherHand } from "./Components/OtherHandComponent";
import { Pile } from "./Components/PileComponent";
import { RenderUnoCard } from "./Components/UnoCardComponent";

let twoStack = 2;
let gameStart = false;
function App() {
  let player1Ref = useRef<Player>(new Player());
  let player2Ref = useRef<Player>(new Player());
  const pile = useRef<Pile>(new Pile());
  const deck = useRef<UnoCard>(new UnoCard());
  const [turnCount, setTurnCount] = useState(0);

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

  const [playerTurn, setPlayerTurn] = useState(player1Ref.current);
  const [otherPlayer, setOtherPlayer] = useState(player2Ref.current);
  if (!gameStart) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ fontSize: "100px" }}>ADA CARD GAME</Typography>
        <Typography
          textAlign={"center"}
          marginLeft={"50px"}
          marginRight={"50px"}
        >
          Match a card by it's value or it's colour, +2 will make the other
          player pick up two cards, but if the other player also has a +2, they
          can stack this to make you draw 4, 6, 8 cards, or so on. Skip turn
          cards skips the opponents turn provided they don't have a skip turn
          card also. Draw a card if you don't have any cards to play. This is a
          local multiplayer game, so after every round, you will be asked to
          pass the device to the other player.
        </Typography>
        <Button
          sx={{
            fontSize: "25px",
            backgroundColor: "blue",
            color: "white",
            margin: "50px",
          }}
          onClick={() => {
            gameStart = true;
            setTurnCount(turnCount + 1);
          }}
        >
          Begin
        </Button>
      </div>
    );
  } else {
    let playableCards = playerTurn.playableCards(pile.current.cardInPlay);
    let cardInPlay = pile.current.cardInPlay;

    if (
      cardInPlay.type === "skip" &&
      !otherPlayer.playableCards({ type: "skip" }).length
    ) {
      cardInPlay.used = true;
    }

    if (otherPlayer.getHand().length === 0 && turnCount > 3) {
      alert(otherPlayer.playerName + " wins!");
      gameStart = false;
      player1Ref.current.newHand();
      player2Ref.current.newHand();
      pile.current.setCard(deck.current.newCard());
    }

    return (
      <div>
        <Button
          sx={{
            height: 50,
            width: 100,
            backgroundColor: "black",
            color: "white",
            position: "absolute",
            bottom: "50%",
            left: "25%",
            margin: "3px",
          }}
          onClick={() => {
            let cardsToDraw = 1;
            if (cardInPlay.type === "plusTwo" && cardInPlay.used === false) {
              cardsToDraw = twoStack;
              twoStack = 2;
              cardInPlay.used = true;
            }
            playerTurn.drawCard(cardsToDraw);
            let temp = playerTurn;
            setTurnCount(turnCount + 1);
            setPlayerTurn(otherPlayer);
            setOtherPlayer(temp);
            setTurnCount(turnCount + 1);
            alert(
              "You have made your turn, please pass the device to " +
                otherPlayer.playerName
            );
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
                      card.type === "plusTwo" &&
                      cardInPlay.type === "plusTwo" &&
                      cardInPlay.used === false
                    ) {
                      twoStack += 2;
                    }

                    if (playableCards.includes(card)) {
                      playerTurn.hand.splice(cardIndex, 1);
                      pile.current.setCard(card);
                      if (
                        !(
                          card.type === "skip" &&
                          !otherPlayer.playableCards(card).length
                        )
                      ) {
                        let temp = playerTurn;
                        setTurnCount(turnCount + 1);
                        setPlayerTurn(otherPlayer);
                        setOtherPlayer(temp);
                        alert(
                          "You have made your turn, please pass the device to " +
                            otherPlayer.playerName
                        );
                      } else {
                        setTurnCount(turnCount + 1);
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
        <OtherHand hand={otherPlayer.getHand()} />

        <Typography
          sx={{
            margin: "20px",
            display: "flex",
          }}
        >
          {playerTurn.playerName}'s turn
        </Typography>

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
      </div>
    );
  }
}

export default App;
