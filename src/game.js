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
    var movesMade = [],
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
                saveMove(movesMade, move, players);
            }
        }

        setWinnerIfFound(game, movesMade, players);
    }
}

function setWinnerForRowOne(game){

    var movesMade = [],
        players = [];

    if(game.winner) return;

    if(game.moves && game.moves.length >= 5) {
        for (var move of game.moves) {
            if (move.coordinates.x === 0 && move.coordinates.y === 0 ||
                move.coordinates.x === 0 && move.coordinates.y === 1 ||
                move.coordinates.x === 0 && move.coordinates.y === 2)
            {
                saveMove(movesMade, move, players);
            };
        }

        setWinnerIfFound(game, movesMade, players);
    }
};

function setWinnerForRowTwo(game){
    var movesMade = [],
        players = [];

    if(game.winner) return;

    if(game.moves && game.moves.length >= 5) {
        for (var move of game.moves) {
            if (move.coordinates.x === 1 && move.coordinates.y === 0 ||
                move.coordinates.x === 1 && move.coordinates.y === 1 ||
                move.coordinates.x === 1 && move.coordinates.y === 2)
            {
                saveMove(movesMade, move, players);
            }
        }

        setWinnerIfFound(game, movesMade, players);
    }
};

function setWinnerForRowThree(game){
    var movesMade = [];
    var players = [];

    if(game.winner) return;

    if(game.moves && game.moves.length >= 5) {
        for (var move of game.moves) {
            if (move.coordinates.x === 2 && move.coordinates.y === 0 ||
                move.coordinates.x === 2 && move.coordinates.y === 1 ||
                move.coordinates.x === 2 && move.coordinates.y === 2)
            {
                saveMove(movesMade, move, players);
            }
        }

        setWinnerIfFound(game, movesMade, players);
    }
};


function setWinnerIfFound(game, movesMade, players){
    if(movesMade.length === 3 &&
       movesMade.allValuesSame() &&
       movesMade.allValuesSame() &&
       players.allValuesSame()){

        game.winner = players[0];
    }

}

function saveMove(moves, move, players){
    moves.push(move.player.moveValue);
    players.push(move.player);
}

Array.prototype.allValuesSame = function(){
    for(var i = 1; i < this.length; i++)
    {
        if(this[i] !== this[0])
            return false;
    }

    return true;
};
