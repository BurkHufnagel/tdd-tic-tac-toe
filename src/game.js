'use strict';

var board = require('./board'),
    player = require('./player'),
    movesMade;

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

    if(!game.moves && game.moves.length >= 5) return;

    checkForFirstRowWinner(game);

    if(!game.winner){
        checkForSecondRowWinner(game);
    };

    if(!game.winner){
        checkForThirdRowWinner(game);
    };

    if(!game.winner){
        checkForDiagonalWinner(game);
    };
};


function checkForFirstRowWinner(game){
    movesMade = [];

    for (var move of game.moves) {
        if (move.coordinates.x === 0 && (move.coordinates.y === 0 ||
                                         move.coordinates.y === 1 ||
                                         move.coordinates.y === 2)){

            movesMade.push({
                player: move.player,
                moveValue: move.player.moveValue
            });
        };
    };

    setWinnerIfFound(game, movesMade);
}

function checkForSecondRowWinner(game){
    movesMade = [];

    for (var move of game.moves) {
        if (move.coordinates.x === 1 && (move.coordinates.y === 0 ||
                                         move.coordinates.y === 1 ||
                                         move.coordinates.y === 2)){

            movesMade.push({
                player: move.player,
                moveValue: move.player.moveValue
            });
        };
    };

    setWinnerIfFound(game, movesMade);
}

function checkForThirdRowWinner(game){
    movesMade = [];

    for (var move of game.moves) {
        if (move.coordinates.x === 2 && (move.coordinates.y === 0 ||
                                         move.coordinates.y === 1 ||
                                         move.coordinates.y === 2)){

            movesMade.push({
                player: move.player,
                moveValue: move.player.moveValue
            });
        };
    };

    setWinnerIfFound(game, movesMade);
};

function checkForDiagonalWinner(game){
    movesMade = [];

    for (var move of game.moves) {
        if (move.coordinates.x === 1 && (move.coordinates.y === 1) ||
            move.coordinates.x === 0 && (move.coordinates.y === 0 || move.coordinates.y === 2) ||
            move.coordinates.x === 2 && (move.coordinates.y === 2 || move.coordinates.y === 0)){

            movesMade.push({
                player: move.player,
                moveValue: move.player.moveValue
            });
        };
    };

    setWinnerIfFound(game, movesMade);
};

function setWinnerIfFound(game, movesMade){
    var moveValues = [],
        players = [];

    if(!movesMade || movesMade.length < 3) return;

    for(let move of movesMade) {
        players.push(move.player);
        moveValues.push(move.moveValue);
    };

    if(moveValues.allValuesSame() && players.allValuesSame()){
        game.winner = players[0];
    };
}

Array.prototype.allValuesSame = function(){
    for(var i = 1; i < this.length; i++) {
        if(this[i] !== this[0]){ return false; }
    };

    return true;
};
