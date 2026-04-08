Rock Paper Scissors Game
link : https://rock-paper-scissors-sooty-ten.vercel.app/


Overview

This is a simple Rock Paper Scissors game built using React. The user plays against the computer, and the game keeps track of scores, rounds, move history, and win streaks.

Features
User vs Computer gameplay
Random computer move generation
Score tracking for both user and computer
Round counter to track total rounds played
Winner display for each round
Move history showing previous moves and results
Streak tracker to display consecutive user wins
Reset functionality to restart the game
How It Works
The user selects one of three options: Rock, Paper, or Scissors.
The computer randomly selects a move.
The winner of the round is determined based on standard game rules:
Rock beats Scissors
Paper beats Rock
Scissors beats Paper
Scores are updated accordingly.
The game also records:
Total rounds played
Result of each round
History of moves
Current winning streak of the user
State Management

The application uses React's useState hook to manage:

userScore – Tracks the user's score
computerScore – Tracks the computer's score
rounds – Number of rounds played
message – Displays the result of the current round
history – Stores past moves and results
streak – Tracks consecutive wins by the user
Functions
handleClick(userMove)
Handles user input
Generates a random computer move
Determines the winner
Updates scores, rounds, streak, message, and history
resetIt()
Resets all scores and game data to initial state
Project Structure
App.jsx

All logic and UI are contained within a single React component.

Installation and Setup
Clone the repository
Navigate to the project directory

Install dependencies:

npm install

Run the development server:

npm run dev
Future Improvements
Add target score to end the game automatically
Improve UI with better styling and visuals
Add animations for moves and results
Implement a smarter AI instead of random selection
Add multiplayer mode
Technologies Used
React
JavaScript
CSS
