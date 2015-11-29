'use strict';

var board = require('./board'),
    player = require('./player');

var game = module.exports = {
    start: start,
    started: false,
    board: board.create(),
    humanPlayer: player.create()
};

function start(){
    game.started = true;
};
