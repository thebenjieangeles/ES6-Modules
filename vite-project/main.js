import "./style.css";
import Player from "./src/Player";
import Game from "./src/Game";

// Create two players
const player1 = new Player("Alice", 100, 10);
const player2 = new Player("Bob", 120, 8);

// Create a new game
const game = new Game(player1, player2);

// Start the game
game.start();
