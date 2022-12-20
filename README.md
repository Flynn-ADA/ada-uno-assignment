# ADA (uno style) Card Game


## Challenge Outline
As part of this challenge, I was tasked with the creation of my own, approved, individual advanced computersystem, application, or game. As part of this challenge, I chose to create a basic Uno style card game using React, MUI and typescript. 

### UML Style Diagram
I created a UML Style Diagram illustrating my initial overall solution
<img width="896" alt="image" src="https://user-images.githubusercontent.com/54669337/208777500-90588f8f-513e-4e2f-847c-e03e6be08e6c.png">


### Trello Board
I used a Trello board in order to break down the requirements of the task into smaller, epic style tickets. This allowed me to plan out my approach for the task

<img width="1390" alt="image" src="https://user-images.githubusercontent.com/54669337/208777917-7b6f687c-460a-42ef-bf2f-976a6639fa27.png">

<img width="745" alt="image" src="https://user-images.githubusercontent.com/54669337/208773132-92c7aacc-6b02-403f-94b7-8b626f2407ae.png">

### Initial Working Plan
My Initial working plan was to use a Fail Fast Agile approach. Developing an MVP and iterating on this design in order to produce a high quality product. For each of my components and features, I would create detailed epics on Trello, in order for me to create the component to the best of my ability. I have My trello board contained the sections "TO DO", "DOING", "DONE", "REFACTOR", and "ARCHIVED". The Refactor column allowed my to follow an agile approach and refine my application as it was being built. This allowed me to manage the quality of my product. I would work on my project almost daily in order to make sure that I fulfilled the client requirements.

### Initital OO Design Ideas
Initially, I knew I wanted to create a player class. This was so I could easily mutate the data of a given player. I knew that I wanted to create a member function that allowed the user to draw a card. I knew that I wanted to have this card fabricated from within another class (card class). This class handled the random card creation using private member functions to break down the class into smaller, easier to understand components. I knew I was going to face challenges by using an OOP approach with react, as it is an outdated approach with react. 

## Development
During my development process, I needed to make sure that I was adopting 'good' standards. Including no duplication of code, separated files, use of a linter for formatting, avoiding deep nesting, naming formats and more. I separated all the components and classes I could, into separate files in order to make sure that the codebase is not overcrowded and it is as neat as possible. I used a linter to make sure my code was formatted nicely, including using semi-colons, spacing, line breaks and more.

### Phase 1 Development
During phase 1, I set out to create a basic game with one player, that allowed the user to place their own cards on a pile (like a singleplayer uno). I created the necessary classes (Player Class, Card Class, Hand Component, Card Component, Draw Card Button, and Pile Class). I created the classes to a minimum viable standard and I was able to create the basic game. At this stage, there was no game over screen, no game menu screen and no second player. 

### Phase 2 Development 
During this phase of development I iterated on the phase 1 product by adding a second player. Once the user had made their turn, they would be prompted to hand the device to the second player, where player 1's cards would be switched for player 2's cards.  Some changes I made to phase 1 included moving the player hand into the main app file. This allowed me to mutate the player data on the press of a card. At this stage, I had not implemented functionality for the +2 or skip cards. I performed a code review on my phase 1 development and refined my code to further meet the coding standards I mentioned previously. For example, I had instances of code duplication in the pile class, in which I refactored to use the card class to render a new random card. This phase of development was the most time costly as I was facing rendering issues when switching between players. 

## Phase 3 Development (Final Stage)
In my third and final stage of development, I created a winner prompt and a cyclical structure that allowed the game to be replayed without refreshing the page. Additionally, I created the functionality of the +2 and skip cards. Following my code review of the 2nd phase. I found that my code was properly commented. To fix this, I spent time reviewing each line of my code and I commented the necessary lines in order to make sure that my code was as readable and reusable as possible. Throughout these phases, I utilised my Trello board to follow an agile approach and continuously refine my code. I also changed the probability of getting +2 and skip cards, as I was seeing them appear too often.


