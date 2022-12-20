import { Button, Grid, Typography } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { CardType, UnoCard } from "./Classes/CardClass";
import { Player } from "./Classes/PlayerClass";
import { OtherHand } from "./Components/OtherHandComponent";
import { Pile } from "./Components/PileComponent";
import { RenderUnoCard } from "./Components/UnoCardComponent";

let twoStack = 2; //set default +2 value
let gameStart = false; //set gameStart to false by default to allow for starting page
function App() {
  const player1Ref = useRef<Player>(new Player()); //Create player 1 class object
  const player2Ref = useRef<Player>(new Player()); //Create player 2 class object
  const pile = useRef<Pile>(new Pile()); //Create pile class object
  const deck = useRef<UnoCard>(new UnoCard()); //Create deck class object
  const [turnCount, setTurnCount] = useState(0); //Create turnCount hook

  useEffect(() => {
    if (player1Ref.current.getHand().length !== 0) {
      //if player1 has cards, exit
      return;
    }

    player1Ref.current.drawCard(7); //player 1 draws 7 cards
    player1Ref.current.playerName = "Player 1"; //set player 1 name to "Player 1"
    player2Ref.current.drawCard(7); //player 2 draws 7 cards
    player2Ref.current.playerName = "Player 2"; //set player 2 name to "Player 2"
    pile.current.setCard(deck.current.newCard()); //Set the first card on the pile face up

    setTurnCount(turnCount + 1); //increase turncount by 1 to force a rerender
  }, [setTurnCount, turnCount, deck, pile]); //pass dependencies into useEffect

  const [playerTurn, setPlayerTurn] = useState(player1Ref.current); //Player turn promises
  const [otherPlayer, setOtherPlayer] = useState(player2Ref.current);
  if (!gameStart) {
    //Before the game starts
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }} //Fullscreen div
      >
        <Typography sx={{ fontSize: "100px" }}>ADA CARD GAME</Typography>{" "}
        {/* Game Title */}
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
        </Typography>{" "}
        {/* Game Rules */}
        <Button
          sx={{
            fontSize: "25px",
            backgroundColor: "blue",
            color: "white",
            margin: "50px",
          }}
          onClick={() => {
            gameStart = true; //Start game
            setTurnCount(turnCount + 1); //Force rerender of app
          }}
        >
          Begin
        </Button>{" "}
        {/* Begin game button */}
      </div>
    );
  } else {
    //Render the main game
    let playableCards = playerTurn.playableCards(pile.current.cardInPlay); //Get list of cards playable by the current player
    let cardInPlay = pile.current.cardInPlay; //Get the current card at the top of the pile

    if (
      cardInPlay.type === "skip" && //if the current card is a skip card
      !otherPlayer.playableCards({ type: "skip" }).length //and the other player doesnt have a skip card
    ) {
      cardInPlay.used = true; //set the skip card used value to true so the next card can be any card
    }

    if (otherPlayer.getHand().length === 0 && turnCount > 3) {
      //if someone has won
      alert(otherPlayer.playerName + " wins!"); //create alert to notify the users
      gameStart = false; //set the game boolean to false
      player1Ref.current.newHand(); //give player 1 a new hand
      player2Ref.current.newHand(); //give player 2 a new hand
      pile.current.setCard(deck.current.newCard()); //set new card to the top of the pile
    }

    return (
      <div>
        {/* Create draw card button */}
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
            let cardsToDraw = 1; //default number of cards to draw
            if (cardInPlay.type === "plusTwo" && cardInPlay.used === false) {
              cardsToDraw = twoStack; //draw cards respective to number of stacked +2 cards
              twoStack = 2; //reset default +2 draw to 2
              cardInPlay.used = true; //set card to used so it isn't stacked on the next turn
            }
            playerTurn.drawCard(cardsToDraw); //draw select number of cards
            let temp = playerTurn; //temporary placeholder
            setPlayerTurn(otherPlayer); //change player
            setOtherPlayer(temp); //change player
            setTurnCount(turnCount + 1); //force rerender
            alert(
              "You have made your turn, please pass the device to " +
                otherPlayer.playerName
            ); //tell the user to pass the device to the next player
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
          {" "}
          {/* Create grid for player hand */}
          {playerTurn.hand.map((card: CardType) => {
            //for each card in the current player's hand
            const cardIndex = playerTurn.hand.indexOf(card); //get index of card for unique ID
            return (
              <Grid
                item
                key={cardIndex}
                sx={{
                  paddingBottom: 1,
                  transition: "top ease 0.3s", //move card up on transition
                  position: "relative",
                  top: 0,
                  "&:hover": {
                    //hover animation for the card
                    top: "-10px",
                    cursor: "pointer",
                  },
                }}
              >
                {/* Create grid item for player card */}
                <div
                  onClick={() => {
                    //when the card is clicked
                    if (
                      card.type === "plusTwo" &&
                      cardInPlay.type === "plusTwo" &&
                      cardInPlay.used === false
                    ) {
                      twoStack += 2; //Increase twoStack when +2 cards are stacked
                    }

                    if (playableCards.includes(card)) {
                      //if card is playable
                      playerTurn.hand.splice(cardIndex, 1); //remove card from the player's hand
                      pile.current.setCard(card); //play the card
                      if (
                        !(
                          //NOT
                          (
                            card.type === "skip" && //if the selected card is a skip card
                            !otherPlayer.playableCards(card).length
                          ) //and the other player has no skip card
                        )
                      ) {
                        let temp = playerTurn;
                        setTurnCount(turnCount + 1); //force rerender
                        setPlayerTurn(otherPlayer); //change players
                        setOtherPlayer(temp);
                        alert(
                          "You have made your turn, please pass the device to " +
                            otherPlayer.playerName
                        ); //tell user to pass the device to other player
                      } else {
                        setTurnCount(turnCount + 1); //force rerender if playing a skip card when the other player doesn't have one
                      }
                    }
                  }}
                >
                  <RenderUnoCard {...card} />{" "}
                  {/* Render uno card in the users hand */}
                </div>
              </Grid>
            );
          })}
        </Grid>
        <OtherHand hand={otherPlayer.getHand()} />{" "}
        {/* Render the other players cards face down*/}
        <Typography
          sx={{
            margin: "20px",
            display: "flex",
          }}
        >
          {playerTurn.playerName}'s turn
        </Typography>{" "}
        {/* display who's turn it is */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            height: "50vh",
          }}
        >
          {pile.current.renderPile()} {/* Render the current card in play */}
        </div>
      </div>
    );
  }
}

export default App;
