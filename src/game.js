'use strict';

var board = require('./board'),
    player = require('./player');

var Game = module.exports = function(){
    this.started = false;
    this.board = board.create();
    this.humanPlayer = null;
    this.computerPlayer = player.create('player 2 (computer)');
    this.currentMove = {
        player: null,
        coordinate: null
    };
};

Game.prototype.play = function(){
    this.started = true
};

Game.prototype.makeMove = function(player, boardCoordinate){
    this.currentMove.player = player;
    this.currentMove.coordinate = boardCoordinate;
};

