'use strict';

var board = require('./board'),
    player = require('./player');

var game = module.exports = {
    initialize: initialize,
    initialized: false,
    board: board.create(),
    humanPlayer: player.create(),
    computerPlayer: player.create('player 2 (computer)')
};

function initialize(){
    game.initialized = true;
};
