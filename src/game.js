'use strict';

var board = require('./board');

var game = module.exports = {
    start: start,
    started: false,
    board: board.create()
};

function start(){
    game.started = true;
};
