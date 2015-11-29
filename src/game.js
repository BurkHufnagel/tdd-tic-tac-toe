'use strict';

var board = require('./board'),
    player = require('./player');

module.exports = {
    status: 'not started',
    board: board.create(),
    humanPlayer: player.create(),
    computerPlayer: player.create('player 2 (computer)')
};
