'use strict';

var board = require('./board'),
    player = require('./player');

var Game = module.exports = function(){
    this.started = false;
    this.board = new board();
    this.humanPlayer = null;
    this.computerPlayer = player.create('player 2 (computer)');
    this.moves = [];
    this.winner = null;
};

Game.prototype.play = function(){
    this.started = true
};

Game.prototype.makeMove = function(move){
    this.board[move.coordinates.x][move.coordinates.y] = move.player.moveValue;
    this.moves.push(move);
    checkForWinner(this);
};

function checkForWinner(game){
    setWinnerForDiagonal(game);
    setWinnerForRowOne(game);
    setWinnerForRowTwo(game);
    setWinnerForRowThree(game);
};

function setWinnerForDiagonal(game){
    var diagonalMoveValues = [],
        players = [];

    if(game.winner) return;

    if(game.moves && game.moves.length >= 5) {

        for (var move of game.moves) {
            if (move.coordinates.x === 1 && move.coordinates.y === 1 ||
                move.coordinates.x === 0 && move.coordinates.y === 0 ||
                move.coordinates.x === 2 && move.coordinates.y === 2 ||
                move.coordinates.x === 0 && move.coordinates.y === 2 ||
                move.coordinates.x === 2 && move.coordinates.y === 0)
            {
                diagonalMoveValues.push(move.player.moveValue);
                players.push(move.player)
            }
        }

        if (diagonalMoveValues.length === 3 && diagonalMoveValues.allValuesSame() && players.allValuesSame()) {
                game.winner = players[0];
        }
    }
}

function setWinnerForRowOne(game){
    var rowMoves = [],
        players = [];

    if(game.winner) return;

    if(game.moves && game.moves.length >= 5) {
        for (var move of game.moves) {
            if (move.coordinates.x === 0 && move.coordinates.y === 0 ||
                move.coordinates.x === 0 && move.coordinates.y === 1 ||
                move.coordinates.x === 0 && move.coordinates.y === 2)
            {
                rowMoves.push(move.player.moveValue);
                players.push(move.player)
            }
        }

        if (rowMoves.length === 3 && rowMoves.allValuesSame() && players.allValuesSame()) {
            game.winner = players[0];
        }
    }

};

function setWinnerForRowTwo(game){
    var rowMoves = [],
        players = [];

    if(game.winner) return;

    if(game.moves && game.moves.length >= 5) {
        for (var move of game.moves) {
            if (move.coordinates.x === 1 && move.coordinates.y === 0 ||
                move.coordinates.x === 1 && move.coordinates.y === 1 ||
                move.coordinates.x === 1 && move.coordinates.y === 2)
            {
                rowMoves.push(move.player.moveValue);
                players.push(move.player)
            }
        }

        if (rowMoves.length === 3 && rowMoves.allValuesSame() && players.allValuesSame()) {
            game.winner = players[0];
        }
    }
};

function setWinnerForRowThree(game){
    var rowMoves = [];
    var players = [];

    if(game.winner) return;

    if(game.moves && game.moves.length >= 5) {
        for (var move of game.moves) {
            if (move.coordinates.x === 2 && move.coordinates.y === 0 ||
                move.coordinates.x === 2 && move.coordinates.y === 1 ||
                move.coordinates.x === 2 && move.coordinates.y === 2)
            {
                rowMoves.push(move.player.moveValue);
                players.push(move.player)
            }
        }

        if (rowMoves.length === 3 && rowMoves.allValuesSame() && players.allValuesSame()) {
            game.winner = players[0];
        }
    }
};

Array.prototype.allValuesSame = function(){
    for(var i = 1; i < this.length; i++)
    {
        if(this[i] !== this[0])
            return false;
    }
    return true;
};

