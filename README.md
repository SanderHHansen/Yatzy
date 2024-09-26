## General
Yatzy is a dice game similar to Yacht and Yahtzee. It is related to the Latin American game Generala and the English game of poker dice. Yatzy is most popular in the Nordic countries.
Note: Work in progress. All core functionality is working, but shown content is not final product.

## Notes on implementation
This implementation was done completely from scratch using no precode of any kind.

**Backend:**
Node.js and Express.js with Socket.IO-implementation for real-time updates for players. 
Furthermore, PostgreSQL-database is used for keeping track of all finished games.

**Frontend:**
React.

# Showcase
## Leaderboard
![image](https://github.com/user-attachments/assets/9fc128a3-0d5d-4aa6-a059-a61970450fa1)

## Roll animation in game
Note: As this is a gif, animation looks choppy. Fluid motion in-game.

![gif](https://github.com/user-attachments/assets/5d9a0779-1dc6-44e8-84a4-96f23b8f8748)

## Image showing home
![image](https://github.com/user-attachments/assets/a8d0d373-b6fe-43bf-860c-3dfc6527269e)

## Creating game

![image](https://github.com/user-attachments/assets/023c66dc-966a-461e-8dd2-2bb52f080ee3)

## Practical notes
Users are met with a pleasant home-screen where games can easily be created. There is no upper limit on how many games the backend can handle at a time, but
each user can only partake in one game at a time. Games are created upon request, and removed off backend when either (1): All players leave the game, or (2): A game finished.
In the latter, results are sent to PostgreSQL-database, and a "Game-end" screen with the winner and all results are displayed.

Lobbies can easily be shared and joined via a three letter code. Users are automatically joining socket when entering room, and automatically disconnected from socket when leaving.

## Playing a game:
Only the active player is allowed to interact with game-elements during their turn. They have the option to roll dice (up to 3 times), saved desired dice, and set a score.
Scoreboard keeps track of all scores in real time, and shows what scores can be set for the current combination of dice, as well as the potential score they can be given.
If hovering over a selection in the scoreboard, a short description of the selection is describer. For example: "One Pair": "Sum of the largest two dice with same value."
