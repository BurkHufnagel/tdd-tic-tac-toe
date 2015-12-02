'use strict';

var board = require('./board'),
    player = require('./player');

var Game = module.exports = function(){
    this.started = false;
    this.board = board.create();
    this.humanPlayer = null;
    this.computerPlayer = player.create('player 2 (computer)');
};

Game.prototype.play = function(){
    this.started = true
};

Game.prototype.makeMove = function(player, boardCoordinate){
    this.board[boardCoordinate.x][boardCoordinate.y] = player.moveValue;
};

