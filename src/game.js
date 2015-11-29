'use strict';

var board = require('./board'),
    player = require('./player');

var game = module.exports = {
    start: start,
    started: false,
    board: board.create(),
    humanPlayer: player.create(),
    computerPlayer: player.create('player 2 (computer)')
};

function start(){
    game.started = true;
};
