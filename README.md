# ADA (uno style) Card Game

Perform npm install before trying to run this project.

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
Initially, I knew I wanted to create a player class. This was so I could easily mutate the data of a given player. I knew that I wanted to create a member function that allowed the user to draw a card (abstraction). I knew that I wanted to have this card fabricated from within another class (card class). This class handled the random card creation using private member functions (encapsulation) to break down the class into smaller, easier to understand components. I knew I was going to face challenges by using an OOP approach with react, as it is an outdated approach with react. However, I overcame this by using inheritance and polymorphism to extend Reacts Component class and create custom, reusable react components. 

## Development
During my development process, I needed to make sure that I was adopting 'good' standards. Including no duplication of code, separated files, use of a linter for formatting, avoiding deep nesting, naming formats and more. I separated all the components and classes I could, into separate files in order to make sure that the codebase is not overcrowded and it is as neat as possible. I used a linter to make sure my code was formatted nicely, including using semi-colons, spacing, line breaks and more.

### Phase 1 Development
During phase 1, I set out to create a basic game with one player, that allowed the user to place their own cards on a pile (like a singleplayer uno). I created the necessary classes (Player Class, Card Class, Hand Component, Card Component, Draw Card Button, and Pile Class). I created the classes to a minimum viable standard and I was able to create the basic game. At this stage, there was no game over screen, no game menu screen and no second player. 

### Phase 2 Development 
During this phase of development I iterated on the phase 1 product by adding a second player. Once the user had made their turn, they would be prompted to hand the device to the second player, where player 1's cards would be switched for player 2's cards.  Some changes I made to phase 1 included moving the player hand into the main app file. This allowed me to mutate the player data on the press of a card. At this stage, I had not implemented functionality for the +2 or skip cards. I performed a code review on my phase 1 development and refined my code to further meet the coding standards I mentioned previously. For example, I had instances of code duplication in the pile class, in which I refactored to use the card class to render a new random card. This phase of development was the most time costly as I was facing rendering issues when switching between players. 

### Phase 3 Development (Final Stage)
In my third and final stage of development, I created a winner prompt and a cyclical structure that allowed the game to be replayed without refreshing the page. Additionally, I created the functionality of the +2 and skip cards. Following my code review of the 2nd phase. I found that my code was properly commented. To fix this, I spent time reviewing each line of my code and I commented the necessary lines in order to make sure that my code was as readable and reusable as possible. Throughout these phases, I utilised my Trello board to follow an agile approach and continuously refine my code. I also changed the probability of getting +2 and skip cards, as I was seeing them appear too often.

### Resolving Bugs and Design Challenges
Some issues I came across throughout the lifecycle of my project were rendering issues. Due to the way react works, my components weren't noticing whenever their props changed. This meant that whenever something on the screen was meant to update, it didn't. In order to fix this, I created a react hook that updated the state of a turn counter. This meant that the app was forced to re-render and thus the updates were shown on screen. An example of this issue was when the user would click a card. Upon clicking the card, the expected behaviour was that it would be removed from the hand on screen and it would be placed onto the pile. However, nothing would happen even though I could see the length of the player hand array decreasing in the console. Another issue I came across was with the "wild" and "wildDraw4" cards that I initially intented to incorporate. These cards involved a procedure where the user would have to choose a colour upon playing the card. Due to time constraints, I wasn't able to get this functionality implemented and I was forced to archive those features. If I had more time, I would definitely implement these features but due to restrictions with react and mui, there was no time efficcient way to implement this whilst following the principles of following OOP. My development process involved rigorous testing through exploratory testing. This meant that I was able to identify visual and logical bugs with my game through a live local host that was rendering my game. 

Some design challenges that I faced involved the use of separate folders and files for different components. This meant that I faced difficulty in mutating props and states from outside components. An example of this was how I was going to remove a card from the players hand apon it being clicked in a different file to which the player was instantiated. In order to overcome this, I resulted to moving the onClick function up a level to a div where the player hand rendering is being called. This was in the main app file where the player is instantiated. This allowed me to edit the players hand directly, as the function was present in the same file as the instantiation. 

## Evalutation
## Code refactoring 
An example of when I performed some code refactoring was when I came across code duplication within the Pile Class. I was essentially recreating the UnoCard component instead of importing it from the UnoCard class. I came across this during Phase 2 of development. An image of the refactored code can be found below:

<img width="741" alt="image" src="https://user-images.githubusercontent.com/54669337/208786824-0dd7524e-cb95-4e7d-b0f4-016d79230dee.png">

I avoided most code smells through the use of a linter. This allowed me to format my document upon saving. This meant that I could use whitespace and linebreaks to effectively improve the readability of my code. My linter also allowed me to make sure that I was punctuating every necesarry line with semi-colons and brackets. 

### Advanced Programming Principles
Throughout my code, I effectively used a wide range of advanced programming principles in order to drive the development of the code. Some of these principles can be found and analysed below
#### Encapsulation
Throughout my code, I used encapsulation to privatise functions and variables to my classes. For example, in my UnoCard class, I used encapsulation to create a private 'Random Colour' function that would return 1 of the four colours used by the cards. This allowed me to reuse the code and separate it into smaller chunks thus making it easier to read. 

<img width="586" alt="image" src="https://user-images.githubusercontent.com/54669337/208856450-8efa70f0-5666-4f5f-b709-6fcec428dedd.png">

#### Event-driven programming
Additionally, throughout my code, I use event driven programming to drive my application. I rely on user event such as mouse clicks to carry out the flow of the game. For example, I have to rely on the user to either click a card to play it, or click the draw card button to draw a card. I also make use of alerts to tell the user to pass the device to the other player so each player can keep their cards secret from the other. 

<img width="748" alt="image" src="https://user-images.githubusercontent.com/54669337/208858858-814bea4b-38c0-46f7-9117-f96f96936dad.png">

#### Polymorphism
I use Polymorphism within my project to pass props into the component classes. The value of these props affect the functionality of the class thus making it polymorphism as you can pass different parameters in and the code will act on the code in the necassary way.

#### Inheritance
Throughout my code, I make use of inheritence to build components. I create my class components by extending react's component class. I use the class' render function to return and render the components I pass in. This allows me to create custom components that can be reused thoughout the codebase.

<img width="549" alt="image" src="https://user-images.githubusercontent.com/54669337/208859019-ba1eb4d8-defa-4a8f-b1da-0ea9f6025ad3.png">

### Features Showcase
Below is an image of my game.
<img width="1433" alt="image" src="https://user-images.githubusercontent.com/54669337/208859181-8c5f21c4-5768-4f40-bec6-5fb012860ae6.png">

Some key features of my game include the creation of clickable cards, which are played into a class that will handle the game logic. Once a card is clicked, it is passed into the pile class, where it is assigned to the cardInPlay variable. This then allows me to reference the cardInPlay variable within my main app file. Doing this allows me to call playerTurn.playableCards(). Passing the cardInPlay variable into the playableCards function allows me to return an array of cards that can be placed on this card. The information in the card object allows me to use context to make game decisions. For example, trick cards such as '+2' and 'skip' have '.used' properties that allow me to validate wether the card effect has taken place already. Once the card effect has taken place, this allows the user to place a new card ontop of it (like a Blue 5 ontop of a used Blue +2). Without this property, I wouldn't be able to give context to the card and it's 'trick' would infinitely repeat, causing players to constantly pickup 2 or skip their turn. 


<img width="1431" alt="image" src="https://user-images.githubusercontent.com/54669337/208861745-b34b13eb-c6c4-4cf4-a770-3bbacbdef76c.png">

Another key feature of my application is the use of alerts. These alerts allow me to temporarily 'pause' the game and tell the user to pass the device to the other player. 'Pausing' the game like this allows me to keep the cards secret from each player, thus allowing for a more authentic card game experience. 

<img width="1410" alt="image" src="https://user-images.githubusercontent.com/54669337/208862071-a1cce9a7-73cf-4f7e-ab7f-0f3129987554.png">
Another one of the key features of my app is the home screen. This screen shows apon first rendering the app. It explains the rules and allows you to click begin. Once the begin button is clicked, the main game renders and you are able to play. Once a player has used all their cards and they have won, the game sends an alert to the screen telling the user who has won and the game brings you back to the home page, where if you click begin again, a new game starts and the process repeats.

<img width="1418" alt="image" src="https://user-images.githubusercontent.com/54669337/208862899-7757e796-7fc0-4713-8b04-6c8230c11d44.png">


### Improved algorithms
I was able to improve my algorithms through the research of react hooks and states. This allowed me to manage the player turns aswell as the force re-rendering of component upon the changing of their props. For example, the useRef value allowed me to persist values between renders of my application. This allowed me to directly reference the DOM Element within my component as a mutable ref object. This assisted me when I was fixing the issue of my application not rerendering when the props of components were changing. The link to the page I used can be found below: 
https://www.w3schools.com/react/react_useref.asp#:~:text=The%20useRef%20Hook%20allows%20you,access%20a%20DOM%20element%20directly.

### Overall Review and Professional Development
Overall, this project has allowed me to substantially improve my OOP skills aswell and my react and frontend development skills. If I had more time, I would have further refactored my code in order to make the main app file less chunky. Additionally I would have continued development on the wild and wildDraw4 card functionalities. Furthermore, I would have liked to implement a networking functionality that allowed users to connect and play against eachother over the internet. I have further improved on my use of Agile methodologies through the use of a kanban board, fail fast techniques and code reviews. These have allowed me to refine my product to the best of my ability. This project gave me the opportunity to expand on my knowledge of react hooks such as useRef() and useState(), in addition to the class component methods of these. As a result of this project I will look into expanding on my work and implementing the features I mentioned before. 


