'use strict';

var board = require('./board'),
    player = require('./player'),
    started = false;

var game = module.exports = {
    started: started,
    status: 'not started',
    board: board.create(),
    humanPlayer: player.create(),
    computerPlayer: player.create('player 2 (computer)')
};

game.start = function(){
    started = true
};