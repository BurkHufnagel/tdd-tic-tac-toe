'use strict';

var board = require('./board'),
    player = require('./player');

var game = module.exports = function(){};

game.initialize = function(){
    this.play = play;
    this.started = false;
    this.status = 'not started';
    this.board = board.create();
    this.humanPlayer = null;
    this.computerPlayer = player.create('player 2 (computer)');
};


function play(){
    this.started = true
};