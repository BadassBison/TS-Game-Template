import { Game } from './game';

const game = new Game();
document.querySelector('body').prepend(game.setupCanvas());
game.start();